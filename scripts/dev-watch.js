import chokidar from 'chokidar';
import { spawn, exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let serverProcess = null;
let isRestarting = false;
let restartTimeout = null;

const DEBOUNCE_MS = 300;
const isWindows = process.platform === 'win32';

function log(message) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${message}`);
}

function killServer() {
    return new Promise((resolve) => {
        if (!serverProcess) {
            resolve();
            return;
        }

        log('Stopping server...');
        const pid = serverProcess.pid;

        if (isWindows) {
            exec(`taskkill /PID ${pid} /T /F`, (err) => {
                serverProcess = null;
                resolve();
            });
        } else {
            serverProcess.kill('SIGTERM');
            serverProcess.on('close', () => {
                serverProcess = null;
                resolve();
            });
            setTimeout(() => {
                if (serverProcess) {
                    serverProcess.kill('SIGKILL');
                    serverProcess = null;
                }
                resolve();
            }, 3000);
        }
    });
}

function runCommand(command, args) {
    return new Promise((resolve, reject) => {
        log(`Running: ${command} ${args.join(' ')}`);
        
        const proc = spawn(command, args, {
            cwd: rootDir,
            stdio: 'inherit',
            shell: true
        });

        proc.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`${command} exited with code ${code}`));
            }
        });

        proc.on('error', reject);
    });
}

function startServer() {
    log('Starting server...');
    
    serverProcess = spawn('node', ['dist/server.js'], {
        cwd: rootDir,
        stdio: 'inherit',
        shell: true
    });

    serverProcess.on('error', (err) => {
        log(`Server error: ${err.message}`);
    });

    serverProcess.on('close', (code) => {
        if (code !== null && code !== 0 && !isRestarting) {
            log(`Server crashed with code ${code}`);
        }
    });
}

async function restart(runInstall = false) {
    if (isRestarting) return;
    isRestarting = true;

    try {
        await killServer();

        if (runInstall) {
            await runCommand('npm', ['install']);
        }

        await runCommand('npm', ['run', 'build']);

        startServer();
        log('Server restarted successfully');
    } catch (err) {
        log(`Restart failed: ${err.message}`);
    } finally {
        isRestarting = false;
    }
}

function debouncedRestart(runInstall = false) {
    if (restartTimeout) {
        clearTimeout(restartTimeout);
    }
    
    restartTimeout = setTimeout(() => {
        restart(runInstall);
    }, DEBOUNCE_MS);
}

const watchPaths = [
    path.join(rootDir, 'src'),
    path.join(rootDir, 'server.js'),
    path.join(rootDir, 'public', 'css'),
    path.join(rootDir, 'public', 'js'),
    path.join(rootDir, 'package.json')
];

const watcher = chokidar.watch(watchPaths, {
    ignored: [
        /node_modules/,
        /dist/,
        /\.git/
    ],
    persistent: true,
    ignoreInitial: true
});

watcher.on('change', (filePath) => {
    const relativePath = path.relative(rootDir, filePath);
    log(`File changed: ${relativePath}`);

    if (relativePath === 'package.json') {
        debouncedRestart(true);
    } else {
        debouncedRestart(false);
    }
});

watcher.on('add', (filePath) => {
    const relativePath = path.relative(rootDir, filePath);
    log(`File added: ${relativePath}`);
    debouncedRestart(false);
});

watcher.on('unlink', (filePath) => {
    const relativePath = path.relative(rootDir, filePath);
    log(`File removed: ${relativePath}`);
    debouncedRestart(false);
});

watcher.on('ready', async () => {
    log('Watching for file changes...');
    log('Press Ctrl+C to stop\n');
    
    await restart(false);
});

watcher.on('error', (error) => {
    log(`Watcher error: ${error.message}`);
});

process.on('SIGINT', async () => {
    log('\nShutting down...');
    await killServer();
    watcher.close();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await killServer();
    watcher.close();
    process.exit(0);
});
