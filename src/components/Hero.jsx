import { useState, useEffect, useRef } from 'react';
import HeroCanvas from './HeroCanvas';
import bestJson from '../assets/best.json';

export default function Hero() {
  const [showMarquee, setShowMarquee] = useState(false);
  const [locationIndex, setLocationIndex] = useState(0);
  const lottiePlayerRef = useRef(null);

  const locationPhrases = [
    'to your home',
    'to his house',
    'to her school',
    'to the office',
    'to everywhere'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarquee(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let url = null;
    let cancelled = false;

    const applyLottieSrc = (player) => {
      if (!player || !url) {
        return;
      }
      player.setAttribute('src', url);
    };

    const setLottieSrc = async () => {
      const player = lottiePlayerRef.current;
      if (!player || !bestJson) {
        return;
      }

      const jsonString = JSON.stringify(bestJson);
      const blob = new Blob([jsonString], { type: 'application/json' });
      url = URL.createObjectURL(blob);

      applyLottieSrc(player);

      const customElementsRegistry = window.customElements;
      if (customElementsRegistry?.whenDefined) {
        try {
          await customElementsRegistry.whenDefined('lottie-player');
        } catch (error) {
          // Ignore and attempt to set src anyway.
        }
      }

      if (cancelled) {
        return;
      }

      applyLottieSrc(player);
    };

    setLottieSrc();

    return () => {
      cancelled = true;
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocationIndex((prevIndex) => (prevIndex + 1) % locationPhrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [locationPhrases.length]);

  return (
    <section data-load-stage data-inertia className="stage">
      <div className="stage-overlay"></div>
      <div className="stage-container">
        <div className="stage-inner">
          <div className="stage-content">
            <div className="stage-logo">
              <lottie-player ref={(el) => { lottiePlayerRef.current = el; }} background="transparent" speed="1" data-load-stage-logo-lottie data-load-stage-logo className="stage-logo-svg"></lottie-player>
            </div>
            <div data-load-stage-cta className="stage-cta">
              <a href="" target="_blank" rel="noopener noreferrer" className="button w-inline-block">
                <div className="button-cycle is-first">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" width="100%" className="button-arrow">
                    <path fill="currentColor" fillRule="evenodd" d="M0 1.827 1.71 0H10v8.22L8.11 10V5.93c0-.992.009-1.89.03-2.695l-6.642 6.58-1.316-1.44 6.641-6.58c-.787.022-1.67.032-2.647.032H0Z" clipRule="evenodd"></path>
                  </svg>
                  <div className="button-cycle-bg"></div>
                </div>
                <div className="button-bg">
                  <div className="button-text">Buy now</div>
                </div>
                <div className="button-cycle is-second">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" width="100%" className="button-arrow">
                    <path fill="currentColor" fillRule="evenodd" d="M0 1.827 1.71 0H10v8.22L8.11 10V5.93c0-.992.009-1.89.03-2.695l-6.642 6.58-1.316-1.44 6.641-6.58c-.787.022-1.67.032-2.647.032H0Z" clipRule="evenodd"></path>
                  </svg>
                  <div className="button-cycle-bg"></div>
                </div>
              </a>
            </div>
            <div className="stage-wrap">
              <div className="stage-left">
                <div className="stage-deco">
                  <div data-load-stage-deco-text style={{ '--animation-delay': '.05s' }} className="stage-deco-text-wrap">
                    <div className="stage-deco-text league-script-regular">Get all your foodstuffs <span className="dynamic-location">{locationPhrases[locationIndex]}</span></div>
                    <div className="stage-deco-text is-wiggle league-script-regular">Get all your foodstuffs <span className="dynamic-location">{locationPhrases[locationIndex]}</span></div>
                  </div>
                  <div data-load-stage-deco-arrow style={{ '--animation-delay': '.15s' }} className="stage-deco-arrow-wrap">
                    <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68a9a089d73e5cf84d4ded67_stage-sketch-arrow.svg" loading="eager" width="150" height="150" alt="stage-sketch-arrow" className="stage-deco-arrow" />
                    <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68a9a089d73e5cf84d4ded67_stage-sketch-arrow.svg" loading="eager" width="150" height="150" alt="stage-sketch-arrow" className="stage-deco-arrow is-wiggle" />
                  </div>
                </div>
                <div className="stage-visual">
                  <HeroCanvas />
                  <div style={{ position: 'absolute', visibility: 'hidden', width: 0, height: 0, overflow: 'hidden' }}>
                    <canvas data-load-stage-canvas-img-path="https://morematcha.vercel.app/img/" data-load-stage-canvas className="stage-canvas"></canvas>
                  </div>
                </div>

                <div className="stage-facts">
                  <div data-inertia-item className="stage-fact-outer">
                    <div data-load-stage-fact data-inertia-item-child className="stage-fact is-first">
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">100</div>
                        <div className="stage-fact-unit">%</div>
                      </div>
                      <div className="stage-fact-text">product quality</div>
                    </div>
                  </div>
                  <div data-inertia-item className="stage-fact-outer">
                    <div data-load-stage-fact data-inertia-item-child className="stage-fact is-second">
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">&lt; 1</div>
                        <div className="stage-fact-unit">hr</div>
                      </div>
                      <div className="stage-fact-text">delivery time</div>
                    </div>
                  </div>
                  <div data-inertia-item className="stage-fact-outer">
                    <div data-load-stage-fact data-inertia-item-child className="stage-fact is-third">
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">0</div>
                        <div className="stage-fact-unit">₵</div>
                      </div>
                      <div className="stage-fact-text">additional fees</div>
                    </div>
                  </div>
                </div>
                <div className="stage-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 731 818" fill="none" data-load-stage-svg className="stage-bg-svg">
                    <path d="M542.941 42.7702C707.951 122.986 766.918 351.375 667.592 555.698C568.265 760.021 352.233 854.727 187.223 774.512C22.2122 694.296 -36.7556 465.905 62.5711 261.582C161.898 57.2593 377.93 -37.4456 542.941 42.7702Z" stroke="currentColor" strokeWidth="28"></path>
                  </svg>
                </div>
              </div>
              <div className="stage-right">
                <div className="stage-text-wrap">
                  <h1 data-load-stage-title className="hero-heading">
                    <span className="white-span">Shop.</span>
                    <br />
                    Receive.
                    <br />
                    Enjoy.
                  </h1>
                  <div className="stage-paragraph-wrap">
                    <p data-load-stage-text className="paragraph is-stage-paragraph">Shop from your favorite markets and get your foodstuff delivered anywhere—fast, easy, and hassle‑free</p>
                    <div data-load-stage-underline style={{ '--animation-delay': '.2s' }} className="stage-subline-wrap">
                      <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/688655fd2fed5f707c038914_Layer_1%20(3).svg" loading="eager" width="152" height="42" alt="Underline" className="subline-img" />
                      <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/688655fd2fed5f707c038914_Layer_1%20(3).svg" loading="eager" width="152" height="42" alt="Underline" className="subline-img is-wiggle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-marquee
        className="marquee"
        style={{
          opacity: showMarquee ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}
      >
        <div className="marquee-inner">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 442" width="100%" style={{ overflow: 'visible' }} className="marquee-bg-svg">
            <path stroke="currentColor" strokeWidth="160" d="M-71 371.6C126.3 260 593.5 65.8 934.5 80.8c313 13.8 497 136 572 200"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 293" width="100%" style={{ overflow: 'visible' }} data-marquee-svg className="marquee-text-svg">
            <path d="M-68 300C173 173 515.5 1 937.2 1 1254.5 1 1468 183.3 1543 246.9" id="curve"></path>
            <text width="100%" style={{ transform: 'translate3d(0,0,0)' }}>
              <textPath style={{ transform: 'translate3d(0,0,0)' }} alignmentBaseline="top" href="#curve">Easy · Go Easy · Go Smooth · Go-Shop</textPath>
            </text>
          </svg>
          <div className="marquee-overlay"></div>
        </div>
      </div>
    </section>
  );
}
