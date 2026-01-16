import React, { useEffect, useRef, useState } from 'react';

const imageUrls = [
    "https://ik.imagekit.io/dr5fryhth/go-shopping/images/bags.png?updatedAt=1768542995298",
    "https://ik.imagekit.io/dr5fryhth/go-shopping/images/products/donsimon.png",
    "https://ik.imagekit.io/dr5fryhth/go-shopping/images/products/frytol.png",
    "https://ik.imagekit.io/dr5fryhth/go-shopping/images/nkatie.png",
    "https://ik.imagekit.io/dr5fryhth/go-shopping/images/apple-inhand.png?updatedAt=1768542987924",
    "https://ik.imagekit.io/dr5fryhth/go-shopping/images/products/herbs.png"
];

const size = 1000;

const CONFIG = {
    bounceDuration: 4000,
    morphDuration: 1000,
    baseX: size / 2,
    baseY: size / 2,
    bounceHeight: 30,
    imageSize: size,
    loadDelay: 4500 // Delay in ms before canvas starts
};

// Easing functions
const easeInOutElastic = (x) => {
    const c5 = (2 * Math.PI) / 4.5;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5
                ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
                : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
};

export default function HeroCanvas() {
    const canvasRef = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        // Delay canvas initialization to let other hero components load first
        const delayTimer = setTimeout(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            canvas.width = size;
            canvas.height = size;

            const images = [];
            let loadedCount = 0;

            let currentState = {
                phase: 'loading',
                currentIndex: 4, // Start with apple-inhand
                startTime: 0
            };

            const drawImageCentered = (img, x, y, width, height, alpha = 1, scale = 1, rotation = 0) => {
                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.translate(x, y);
                ctx.scale(scale, scale);
                ctx.rotate(rotation);

                const aspect = img.width / img.height;
                let drawW = width;
                let drawH = height;

                if (aspect > 1) {
                    drawH = width / aspect;
                } else {
                    drawW = height * aspect;
                }

                ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
                ctx.restore();
            };

            const loop = (timestamp) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const elapsed = timestamp - currentState.startTime;

                if (currentState.phase === 'bounce') {
                    const progress = Math.min(elapsed / CONFIG.bounceDuration, 1);
                    const rockAngle = Math.sin(progress * Math.PI * 4) * 0.08;

                    if (images[currentState.currentIndex]) {
                        drawImageCentered(
                            images[currentState.currentIndex],
                            CONFIG.baseX,
                            CONFIG.baseY,
                            CONFIG.imageSize,
                            CONFIG.imageSize,
                            1,
                            1,
                            rockAngle
                        );
                    }

                    if (progress >= 1) {
                        currentState.phase = 'morph';
                        currentState.startTime = timestamp;
                    }

                } else if (currentState.phase === 'morph') {
                    const progress = Math.min(elapsed / CONFIG.morphDuration, 1);
                    const ease = easeInOutElastic(progress);

                    const nextIndex = (currentState.currentIndex + 1) % images.length;
                    const currentImg = images[currentState.currentIndex];
                    const nextImg = images[nextIndex];

                    const outScale = 1 - ease;
                    const outAlpha = 1 - progress;
                    const outRot = 0;

                    if (currentImg) {
                        drawImageCentered(
                            currentImg,
                            CONFIG.baseX,
                            CONFIG.baseY,
                            CONFIG.imageSize,
                            CONFIG.imageSize,
                            outAlpha,
                            outScale,
                            outRot
                        );
                    }

                    const inScale = ease;
                    const inAlpha = progress;
                    const inRot = 0;

                    if (nextImg) {
                        drawImageCentered(
                            nextImg,
                            CONFIG.baseX,
                            CONFIG.baseY,
                            CONFIG.imageSize,
                            CONFIG.imageSize,
                            inAlpha,
                            inScale,
                            inRot
                        );
                    }

                    if (progress >= 1) {
                        currentState.currentIndex = nextIndex;
                        currentState.phase = 'bounce';
                        currentState.startTime = timestamp;
                    }
                }

                animationFrameRef.current = requestAnimationFrame(loop);
            };

            const startAnimation = () => {
                currentState.phase = 'bounce';
                currentState.startTime = performance.now();
                setIsReady(true);
                animationFrameRef.current = requestAnimationFrame(loop);
            };

            imageUrls.forEach((url, index) => {
                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.src = url;
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === imageUrls.length) {
                        startAnimation();
                    }
                };
                images[index] = img;
            });
        }, CONFIG.loadDelay);

        return () => {
            clearTimeout(delayTimer);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                objectFit: 'contain',
                opacity: isReady ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                marginTop: '-90px'
            }}
        />
    );
}
