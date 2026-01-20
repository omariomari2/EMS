import React, { useRef, useEffect } from 'react';

const Protein = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const parallaxSpeed = 0.4;

        const updateParallax = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.bottom > 0 && rect.top < windowHeight) {
                const scrolled = -rect.top;
                const yOffset = scrolled * parallaxSpeed;
                section.style.backgroundPosition = `center calc(0% + ${yOffset}px)`;
            }
        };

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        updateParallax();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={sectionRef} className="c-section hm-protein">
            <div z-5="true" className="o-container">
                <div className="o-vertical">
                    <div className="o-row">
                        <div className="o-col _w-6 md-w-12 sm-w-24">
                            <h1 split-text="true" className="t-display-2">We stand with the hands that feed us.</h1>
                        </div>
                        <div className="o-col _w-4 md-w-8 sm-w-24">
                        </div>
                    </div>
                </div>
            </div>
            <div className="protein-content-group">
                <a aria-label="Buy from our farmers" href="/shop" className="button w-inline-block">
                    <div className="button-cycle is-first">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" width="100%" className="button-arrow">
                            <path fill="currentColor" fillRule="evenodd" d="M0 1.827 1.71 0H10v8.22L8.11 10V5.93c0-.992.009-1.89.03-2.695l-6.642 6.58-1.316-1.44 6.641-6.58c-.787.022-1.67.032-2.647.032H0Z" clipRule="evenodd"></path>
                        </svg>
                        <div className="button-cycle-bg"></div>
                    </div>
                    <div className="button-bg">
                        <div className="button-text">Buy from our farmers</div>
                    </div>
                    <div className="button-cycle is-second">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" width="100%" className="button-arrow">
                            <path fill="currentColor" fillRule="evenodd" d="M0 1.827 1.71 0H10v8.22L8.11 10V5.93c0-.992.009-1.89.03-2.695l-6.642 6.58-1.316-1.44 6.641-6.58c-.787.022-1.67.032-2.647.032H0Z" clipRule="evenodd"></path>
                        </svg>
                        <div className="button-cycle-bg"></div>
                    </div>
                </a>
                <p className="paragraph">Our crop-growers, vendors and small businesses are the backbone of our community. Go-Shop is committed to supporting and ensuring they have access to the resources they need to succeed, and you to enjoy the best of their work.</p>
            </div>
        </div>
    );
};

export default Protein;
