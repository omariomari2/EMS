/**
 * Parallax effect for Protein section background
 * Moves background image at a slower rate than scroll for depth effect
 */

document.addEventListener('DOMContentLoaded', () => {
  const proteinSection = document.querySelector('.hm-protein');

  if (!proteinSection) return;

  const parallaxSpeed = 0.4; // Lower = slower background movement (0.3-0.5 works well)

  const updateParallax = () => {
    const rect = proteinSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Only apply parallax when section is in view
    if (rect.bottom > 0 && rect.top < windowHeight) {
      // Calculate how far the section is from the top of viewport
      const scrolled = -rect.top;
      const yOffset = scrolled * parallaxSpeed;

      proteinSection.style.backgroundPosition = `center calc(0% + ${yOffset}px)`;
    }
  };

  // Use requestAnimationFrame for smooth performance
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateParallax();
});
