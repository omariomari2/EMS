const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;
const rootDir = path.join(__dirname, '..');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/base');
app.use(expressLayouts);

app.use('/inline', express.static(path.join(rootDir, 'inline')));
app.use('/external', express.static(path.join(rootDir, 'external')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/public', express.static(path.join(__dirname, 'public')));

const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
