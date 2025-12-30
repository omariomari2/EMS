!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);
(function (w, d, s, l, i) {
  w[l] = w[l] || []; w[l].push({
    'gtm.start':
      new Date().getTime(), event: 'gtm.js'
  }); var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-K7635FHZ');

gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText, InertiaPlugin, Draggable);

(function () {
  function removeCookieScript() {
    const selectors = [
      '[id*="cookie"]',
      '[class*="cookie"]',
      '[id*="CookieScript"]',
      '[class*="CookieScript"]',
      '[id*="cookiescript"]',
      '[class*="cookiescript"]',
      '.cookiescriptlogo',
      'path.cookiescriptlogo',
      '[data-cookie]',
      '[data-cookiescript]'
    ];

    selectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el && el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });
      } catch (e) { }
    });
  }

  function blockCookieScriptScripts() {
    const scripts = document.querySelectorAll('script[src*="cookie"], script[src*="CookieScript"], script[src*="cookiescript"]');
    scripts.forEach(script => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      removeCookieScript();
      blockCookieScriptScripts();
    });
  } else {
    removeCookieScript();
    blockCookieScriptScripts();
  }

  const observer = new MutationObserver(function (mutations) {
    removeCookieScript();
    blockCookieScriptScripts();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  setInterval(function () {
    removeCookieScript();
    blockCookieScriptScripts();
  }, 1000);
})();



document.addEventListener('DOMContentLoaded', function () {
  // Experience Modal Logic
  const modal = document.querySelector('.experience-modal');
  const modalWrapper = document.querySelector('.experience-modal__wrapper');
  const modalImage = document.querySelector('.experience-modal__image');
  const modalTitle = document.querySelector('.experience-modal__title');
  const modalSubtitle = document.querySelector('.experience-modal__subtitle');
  const modalDescription = document.querySelector('.experience-modal__description');
  const closeBtn = document.querySelector('.experience-modal__close');
  const backdrop = document.querySelector('.experience-modal__backdrop');

  // Dynamic CTA
  const modalCta = document.querySelector('.experience-modal__cta');
  let currentServiceName = "General Inquiry"; // Default

  // Access Form (Booking)
  const accessModal = document.querySelector('[data-modal-name="modal-access"]');
  const accessForm = document.getElementById('wf-form-Access-Form');
  const accessModalTitle = accessModal ? accessModal.querySelector('.modal__h2') : null;
  const accessModalDesc = accessModal ? accessModal.querySelector('.modal__p') : null;

  // Navigation Buttons
  const prevBtn = document.querySelector('.experience-modal__nav--prev');
  const nextBtn = document.querySelector('.experience-modal__nav--next');

  // Select cards
  const cardsNodeList = document.querySelectorAll('[data-experience="card"]');
  // Convert to Array for easier index manipulation
  const cards = Array.from(cardsNodeList);

  let activeCard = null; // Store reference to restore opacity
  let currentIndex = -1; // Track current index for navigation

  // --- DYNAMIC FORM CONFIG ---
  const serviceSchemas = {
    'Travel and Tour': {
      title: 'Plan Your Trip',
      description: 'Tell us where you want to go, and we will handle the rest.',
      fields: [
        { label: 'Destination', name: 'Destination', type: 'text', placeholder: 'e.g., Dubai, Cape Town' },
        { label: 'Departure Date', name: 'Departure-Date', type: 'date' },
        { label: 'No. of Travelers', name: 'Travelers', type: 'number', placeholder: '1' }
      ]
    },
    'Chop Bar': {
      title: 'Place Food Order',
      description: 'Let us know what you are craving.',
      fields: [
        { label: 'Order Details', name: 'Order-Details', type: 'textarea', placeholder: 'What would you like to eat?' },
        { label: 'Service Type', name: 'Service-Type', type: 'select', options: ['Dine-in', 'Takeaway', 'Delivery'] }
      ]
    },
    'Salon': {
      title: 'Book Appointment',
      description: 'Schedule your beauty session with us.',
      fields: [
        { label: 'Preferred Date', name: 'Date', type: 'date' },
        { label: 'Preferred Time', name: 'Time', type: 'time' },
        { label: 'Service Type', name: 'Service-Type', type: 'text', placeholder: 'e.g., Braids, Haircut, Manicure' }
      ]
    },
    'Massage': {
      title: 'Book Massage',
      description: 'Relax and recharge. Book your session now.',
      fields: [
        { label: 'Preferred Date', name: 'Date', type: 'date' },
        { label: 'Preferred Time', name: 'Time', type: 'time' },
        { label: 'Duration', name: 'Duration', type: 'select', options: ['30 Mins', '60 Mins', '90 Mins'] }
      ]
    },
    'Washing Bay': {
      title: 'Vehicle Service',
      description: 'Book a wash or detailing service for your car.',
      fields: [
        { label: 'Car Model', name: 'Car-Model', type: 'text', placeholder: 'e.g., Toyota Camry' },
        { label: 'Service', name: 'Service-Type', type: 'select', options: ['Full Wash', 'Exterior Only', 'Interior Detailing'] },
        { label: 'Preferred Time', name: 'Time', type: 'time' }
      ]
    },
    'Rental Offices': {
      title: 'Office Inquiry',
      description: 'Find the perfect workspace for your team.',
      fields: [
        { label: 'Team Size', name: 'Team-Size', type: 'number', placeholder: 'e.g., 5' },
        { label: 'Duration (Months)', name: 'Duration', type: 'number', placeholder: 'e.g., 12' },
        { label: 'Start Date', name: 'Start-Date', type: 'date' }
      ]
    },
    'Fuel Station': {
      title: 'Fuel Inquiry / Order',
      description: 'Let us know your fuel needs or bulk order request.',
      fields: [
        { label: 'Fuel Type', name: 'Fuel-Type', type: 'select', options: ['Petrol', 'Diesel', 'V-Power'] },
        { label: 'Amount (GHS)', name: 'Amount', type: 'number', placeholder: 'e.g., 500' }
      ]
    },
    'Supermarket': {
      title: 'Product Inquiry',
      description: 'Check if an item is in stock or request a special order.',
      fields: [
        { label: 'Shopping List / Inquiry', name: 'Inquiry', type: 'textarea', placeholder: 'List items or ask about availability...' }
      ]
    },
    'Cold Store': {
      title: 'Bulk Order Inquiry',
      description: 'Order fresh fish, meat, and poultry in bulk.',
      fields: [
        { label: 'Bulk Order / Inquiry', name: 'Inquiry', type: 'textarea', placeholder: 'List items (Fish, Meat, etc.)...' }
      ]
    },
    'Executive Lounge': {
      title: 'Lounge Reservation',
      description: 'Reserve a spot for comfort and privacy.',
      fields: [
        { label: 'Date', name: 'Date', type: 'date' },
        { label: 'Time', name: 'Time', type: 'time' },
        { label: 'Number of Guests', name: 'Guests', type: 'number' }
      ]
    }
  };

  function renderFormFields(service) {
    const container = document.getElementById('dynamic-form-fields');
    if (!container) return;

    container.innerHTML = ''; // Clear previous
    const config = serviceSchemas[service] || { fields: [] }; // Default to empty fields
    const fields = config.fields || [];

    fields.forEach(field => {
      const group = document.createElement('div');
      group.className = 'form-field-group';

      const label = document.createElement('label');
      label.className = 'form-label';
      label.innerText = field.label;
      group.appendChild(label);

      const fieldWrapper = document.createElement('div');
      fieldWrapper.className = 'form-field';

      let input;
      if (field.type === 'textarea') {
        input = document.createElement('textarea');
        input.className = 'form-input w-input';
        // Check if stylesheet adds specific height, otherwise default
      } else if (field.type === 'select') {
        input = document.createElement('select');
        input.className = 'form-input w-select';
        field.options.forEach(opt => {
          const option = document.createElement('option');
          option.value = opt;
          option.innerText = opt;
          input.appendChild(option);
        });
      } else {
        input = document.createElement('input');
        input.className = 'form-input w-input';
        input.type = field.type;
      }

      input.name = field.name;
      input.dataset.name = field.name;
      if (field.placeholder) input.placeholder = field.placeholder;

      // Style fix for dynamic inputs
      input.style.marginBottom = '0';

      fieldWrapper.appendChild(input);
      group.appendChild(fieldWrapper);
      container.appendChild(group);
    });
  }

  // CTA Click Listener
  if (modalCta) {
    modalCta.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent bubbling issues

      if (accessModal) {
        const config = serviceSchemas[currentServiceName] || {};
        const title = config.title || `Book ${currentServiceName}`;
        const desc = config.description || `Complete the form below to book ${currentServiceName}. We'll get back to you shortly.`;

        // 1. Update Booking Modal Text
        if (accessModalTitle) accessModalTitle.textContent = title;
        if (accessModalDesc) accessModalDesc.textContent = desc;

        // 2. Render Dynamic Fields
        renderFormFields(currentServiceName);

        // 3. Open Modal
        const modalGroup = document.querySelector('[data-modal-group-status]');
        if (modalGroup) modalGroup.setAttribute('data-modal-group-status', 'active');

        accessModal.setAttribute('data-modal-status', 'active');
      }
    });
  }
  // --- FORM LOGIC MERGED ---
  if (accessForm) {
    accessForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const firstName = accessForm.querySelector('[name="First-Name"]').value;
      const email = accessForm.querySelector('[name="email"]').value;
      const phone = accessForm.querySelector('[name="Phone"]').value || 'Not provided';
      const message = accessForm.querySelector('[name="Message"]').value || '';

      // Collect Dynamic Data
      let dynamicDetails = '';
      const dynamicContainer = document.getElementById('dynamic-form-fields');
      if (dynamicContainer) {
        const inputs = dynamicContainer.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          // Find label
          const label = input.closest('.form-field-group').querySelector('label').innerText;
          dynamicDetails += `${label}: ${input.value}\n`;
        });
      }

      const subject = encodeURIComponent(`Booking: ${currentServiceName}`);
      const body = encodeURIComponent(
        `SERVICE REQUEST: ${currentServiceName}\n\n` +
        `--- CUSTOMER DETAILS ---\n` +
        `Name: ${firstName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `--- SERVICE DETAILS ---\n` +
        dynamicDetails +
        (message ? `\n--- MESSAGE ---\n${message}` : '')
      );

      const mailtoLink = 'mailto:agyarefredick@gmail.com?subject=' + subject + '&body=' + body;
      window.location.href = mailtoLink;

      const successNotification = accessForm.parentElement.querySelector('.w-form-done');
      if (successNotification) {
        setTimeout(function () {
          successNotification.style.display = 'flex';
        }, 100);
      }
    });
  }

  /**
   * EXPANSION ANIMATION IMPLEMENTATION EXPLANATION:
   * 
   * To achieve the effect of the card "physically expanding" into the modal, we use a manual FLIP (First, Last, Invert, Play) technique.
   * 
   * 1. **Setup (First):** We capture the bounding rectangle (position and size) of the clicked card relative to the viewport.
   * 2. **State Change:** We make the modal visible but invisible (opacity 0) to calculate its "final" (natural) dimensions and position in the center of the screen.
   * 3. **Positioning:** We immediately position the `modalWrapper` (fixed) to exactly match the Card's starting position and dimensions. 
   *    - We also force the internal grid of the modal to look like the card initially (Image taking up 100%).
   * 4. **Animation (Play):** We use GSAP to animate the `modalWrapper` from those Card values (Start) to the Modal values (End).
   *    - Properties animated: `top`, `left`, `width`, `height`.
   *    - Simultaneously, we animate the internal layout: The Grid changes from "Image Only" to "Image + Text", and the text fades in.
   * 5. **Cleanup:** Once mapped, we ensure the modal acts as a normal fixed modal.
   */
  function openModal(card) {
    activeCard = card;
    currentIndex = cards.indexOf(card); // Update index

    const cardRect = card.getBoundingClientRect();

    // Extract content
    updateModalContent(card);

    // --- ANIMATION START ---

    // 1. Lock dimensions for FLIP
    // Reset modal styles for calculation
    modal.style.display = 'flex';
    modal.classList.remove('is--active'); // Ensure hidden for calc if needed, but display flex is key

    // Calculate Final State (Center of screen, default CSS size)
    // We temporarily render it to get computed end values.
    modalWrapper.style.transform = '';
    modalWrapper.style.width = '';
    modalWrapper.style.height = '';
    modalWrapper.style.top = '';
    modalWrapper.style.left = '';
    modalWrapper.style.position = '';

    // Force Reflow/Calc
    const endRect = modalWrapper.getBoundingClientRect();

    // 2. Set Initial State (Card Position)
    // We set fixed position to match the card exactly
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.top = cardRect.top + 'px';
    modalWrapper.style.left = cardRect.left + 'px';
    modalWrapper.style.width = cardRect.width + 'px';
    modalWrapper.style.height = cardRect.height + 'px';
    modalWrapper.style.margin = '0'; // Override any auto margins
    modalWrapper.style.transform = 'none'; // No scale transform, physical sizing
    modalWrapper.style.zIndex = '1002'; // High Z-Index

    // Visual Hacks for "Card Look":
    // The modal has a grid (1.5fr 1fr). The card is 100% image (bg).
    // We need the modal's left column (image) to take up 100% width initially.
    const modalContent = document.querySelector('.experience-modal__content');
    // Save original grid style to restore?
    // Actually, we can animate CSS variables or just simple properties.
    // Let's use GSAP to tween the grid template columns.

    // Show Modal Container
    modal.classList.add('is--active'); // For backdrop
    gsap.set(backdrop, { opacity: 0 });

    // Hide original card
    gsap.set(card, { opacity: 0 });

    // ANIMATE
    const tl = gsap.timeline({
      onComplete: () => {
        // Remove fixed positioning locks and revert to CSS class handling if resizing, 
        // OR easier: keep it fixed but explicitly set to center values or percentages.
        // To support window resize, good practice is to clear inline styles and let CSS take over (is--active).
        modalWrapper.style.position = '';
        modalWrapper.style.top = '';
        modalWrapper.style.left = '';
        modalWrapper.style.width = '';
        modalWrapper.style.height = '';
        modalWrapper.style.margin = '';
        // The grid style also needs to be cleared
        modalContent.style.gridTemplateColumns = '';
      }
    });

    // 1. Wrapper Expansion
    tl.to(modalWrapper, {
      top: endRect.top,
      left: endRect.left,
      width: endRect.width,
      height: endRect.height,
      duration: 0.6,
      ease: "circ.inOut" // Changed to circ.inOut for more dramatic expansion feel
    }, 0);

    // 2. Internal Grid/Image Transition
    // Start: Image takes full width (simulate card)
    // End: Image takes 1.5fr (defined in CSS)

    // Set initial modalContent grid to '1fr 0fr'.
    gsap.set(modalContent, { gridTemplateColumns: '100% 0%' });

    // Animate to final grid. Note: "1.5fr 1fr" isn't directly animatable easily unless we use percentages.
    // 1.5fr / 2.5fr = 60%, 1fr / 2.5fr = 40%
    tl.to(modalContent, {
      gridTemplateColumns: '60% 40%',
      duration: 0.6,
      ease: "circ.inOut"
    }, 0);

    // 3. Content Fade In
    const rightCol = document.querySelector('.experience-modal__right');
    const closeIcon = document.querySelector('.experience-modal__close');

    gsap.set(rightCol, { opacity: 0, x: 20 });
    gsap.set(closeIcon, { opacity: 0, scale: 0.5 });

    tl.to([rightCol, closeIcon], {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.4,
      delay: 0.2 // Start halfway through expansion
    }, 0);

    // Show Nav Buttons
    gsap.fromTo([prevBtn, nextBtn], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, delay: 0.4 });

    // 4. Backdrop Fade In
    tl.to(backdrop, { opacity: 1, duration: 0.6 }, 0);

    // Stop Lenis
    if (window.lenis) {
      window.lenis.stop();
    }
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!activeCard) {
      handleCloseReset();
      return;
    }

    const cardRect = activeCard.getBoundingClientRect();

    // Capture current modal state
    const startRect = modalWrapper.getBoundingClientRect();

    // We force fixed position again for the exit animation
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.top = startRect.top + 'px';
    modalWrapper.style.left = startRect.left + 'px';
    modalWrapper.style.width = startRect.width + 'px';
    modalWrapper.style.height = startRect.height + 'px';
    modalWrapper.style.margin = '0';

    const modalContent = document.querySelector('.experience-modal__content');
    const rightCol = document.querySelector('.experience-modal__right');

    const tl = gsap.timeline({
      onComplete: () => {
        // CROSS FADE SWAP
        // 1. Show the original card (it's behind the wrapper now)
        gsap.set(activeCard, { opacity: 1 });

        // 2. Fade out the wrapper to reveal the card
        gsap.to(modalWrapper, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          onComplete: handleCloseReset
        });
      }
    });

    // 1. Content Fade Out
    tl.to(rightCol, { opacity: 0, duration: 0.2 }, 0);
    tl.to(backdrop, { opacity: 0, duration: 0.5 }, 0);
    tl.to([prevBtn, nextBtn], { opacity: 0, duration: 0.2 }, 0);

    // 2. Shrink Wrapper back to Card
    tl.to(modalWrapper, {
      top: cardRect.top,
      left: cardRect.left,
      width: cardRect.width,
      height: cardRect.height,
      duration: 0.5,
      ease: "circ.inOut"
    }, 0);

    // 3. Revert Grid
    tl.to(modalContent, {
      gridTemplateColumns: '100% 0%',
      duration: 0.5,
      ease: "circ.inOut"
    }, 0);
  }

  function navigate(direction) {
    if (currentIndex === -1) return;

    // 1. Calculate new index
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = cards.length - 1;
    if (newIndex >= cards.length) newIndex = 0;

    const newCard = cards[newIndex];

    // 2. Handle activeCard logic
    gsap.set(activeCard, { opacity: 1 });
    activeCard = newCard;
    currentIndex = newIndex;
    gsap.set(activeCard, { opacity: 0 });

    // 3. Wrapper Sliding Animation

    // Capture current state geometry
    const startRect = modalWrapper.getBoundingClientRect();

    // Clone the wrapper to create the "Exit" element
    const exitWrapper = modalWrapper.cloneNode(true);
    // Append to modal container (sibling to real wrapper)
    modal.appendChild(exitWrapper);

    // Lock Exit Wrapper to current position visually
    gsap.set(exitWrapper, {
      position: 'fixed',
      top: startRect.top,
      left: startRect.left,
      width: startRect.width,
      height: startRect.height,
      margin: 0,
      zIndex: 1002
    });

    // Update the Real Wrapper with new content immediately
    // (The global variables like modalTitle points to the real wrapper's children)
    updateModalContent(newCard);

    // Prepare Real Wrapper for "Enter" animation
    // We lock it to fixed as well to ensure smooth animation from off-screen
    // Start position: Same top/dimensions, but offset horizontally by window width
    const offset = direction === 1 ? window.innerWidth : -window.innerWidth;
    const exitOffset = direction === 1 ? -window.innerWidth : window.innerWidth;

    // Force real wrapper to fixed temporarily
    gsap.set(modalWrapper, {
      position: 'fixed',
      top: startRect.top,
      left: startRect.left + offset, // Start off-screen
      width: startRect.width,
      height: startRect.height,
      margin: 0,
      x: 0, // Clear any transforms
      opacity: 1
    });

    // Animate
    const tl = gsap.timeline({
      onComplete: () => {
        exitWrapper.remove();
        // Release the real wrapper back to CSS layout
        modalWrapper.style.position = '';
        modalWrapper.style.top = '';
        modalWrapper.style.left = '';
        modalWrapper.style.width = '';
        modalWrapper.style.height = '';
        modalWrapper.style.margin = '';
      }
    });

    // Slide Exit Wrapper Out
    tl.to(exitWrapper, {
      left: startRect.left + exitOffset,
      duration: 0.6,
      ease: "power2.inOut"
    }, 0);

    // Slide Real Wrapper In
    tl.to(modalWrapper, {
      left: startRect.left,
      duration: 0.6,
      ease: "power2.inOut"
    }, 0);
  }

  function updateModalContent(card) {
    const title = card.querySelector('[data-card-experience="title"]').textContent;
    const subtitle = card.querySelector('[data-card-experience="subtitle"]').textContent;
    const text = card.querySelector('[data-card-experience="text"]').textContent;
    const img = card.querySelector('[data-card-experience="image"]');

    // Dynamic CTA Data
    const ctaText = card.getAttribute('data-card-cta') || "Book Service";
    const serviceName = card.getAttribute('data-card-service') || title;
    const details = card.getAttribute('data-card-details'); // Extended content

    let imgSrc = '';
    if (img) {
      imgSrc = img.currentSrc || img.src;
    }

    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle;
    modalDescription.textContent = details || text; // Use details if available, else fallback
    modalImage.src = imgSrc;
    modalImage.alt = title;

    // Update CTA
    if (modalCta) {
      modalCta.textContent = ctaText;
      // Update global service name for the form
      currentServiceName = serviceName;

      // Remove old listeners to prevent duplicates (simple generic handler below is better)
    }
  }



  function handleCloseReset() {
    // Kill any active tweens to prevent conflicts
    gsap.killTweensOf(modalWrapper);
    gsap.killTweensOf(backdrop);
    gsap.killTweensOf(document.querySelector('.experience-modal__content'));
    gsap.killTweensOf(document.querySelector('.experience-modal__right'));
    gsap.killTweensOf(document.querySelector('.experience-modal__close'));
    gsap.killTweensOf(prevBtn);
    gsap.killTweensOf(nextBtn);

    modal.classList.remove('is--active');

    if (activeCard) {
      gsap.set(activeCard, { opacity: 1 });
      activeCard = null;
    }

    // Explicitly clear ALL potentially animated inline styles
    modalWrapper.style.position = '';
    modalWrapper.style.top = '';
    modalWrapper.style.left = '';
    modalWrapper.style.width = '';
    modalWrapper.style.height = '';
    modalWrapper.style.margin = '';
    modalWrapper.style.transform = '';
    modalWrapper.style.opacity = ''; // Crucial: Clear opacity left by fade out

    backdrop.style.opacity = '';

    const content = document.querySelector('.experience-modal__content');
    if (content) content.style.gridTemplateColumns = '';

    // Start Lenis
    if (window.lenis) {
      window.lenis.start();
    }
    document.body.style.overflow = '';

    // Reset modal display (handled by CSS class usually, but ensure inline display is gone)
    modal.style.display = '';
    modal.style.opacity = '';
  }

  // Add event listeners
  const lists = document.querySelectorAll('[data-experience="list"]');
  lists.forEach(list => {
    list.addEventListener('click', function (e) {
      const card = e.target.closest('[data-experience="card"]');
      if (card) {
        // Check if card has a link attribute - if so, navigate instead of opening modal
        const cardLink = card.getAttribute('data-card-link');
        if (cardLink) {
          window.location.href = cardLink;
          return; // Prevent modal from opening
        }
        openModal(card);
      }
    });
  });

  // Close events
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Nav events
  if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('is--active')) return;

    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
});
