document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Mobile menu toggle ──────────────────────────────────
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';

      // flip state
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('mobile-menu--open', !isOpen);
    });
  }

  // ── 2. Close mobile menu when a link is clicked ───────────
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('mobile-menu--open');
    });
  });

  // ── 3. Smooth-scroll for in-page anchors ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── 4. Sticky header – theme toggle on scroll ───────────────────
  const header = document.querySelector('.header');
  const logoImg = document.querySelector('.logo_img');
  // Get threshold from data attribute on body, or use default
  const scrollThreshold = parseInt(document.body.dataset.scrollThreshold) || 550;

  function updateHeaderTheme(isDark) {
    if (isDark) {
      header.classList.add('header--dark');
      if (logoImg) {
        logoImg.src = './img/logo_white.png';
      }
    } else {
      header.classList.remove('header--dark');
      if (logoImg) {
        logoImg.src = './img/logo_dark.png';
      }
    }
  }

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    updateHeaderTheme(currentY > scrollThreshold);
  }, { passive: true });

  // Set initial theme on page load
  updateHeaderTheme(window.scrollY > scrollThreshold);

  // ── 5. Service cards – staggered entrance on scroll ───────
  const cards = document.querySelectorAll('.service-card');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity  = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  cards.forEach((card, i) => {
    // initial hidden state
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(28px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
    cardObserver.observe(card);
  });

  // ── 6. Stats counter – animate numbers on scroll into view ─
  const stats = document.querySelectorAll('.stat__value');

  function animateCounter(el) {
    const originalText = el.textContent;
    
    // Handle values with "/" (like "24/7")
    if (originalText.includes('/')) {
      const parts = originalText.split('/');
      const firstNum = parseInt(parts[0]) || 0;
      const secondPart = parts[1] || '';
      
      if (firstNum > 0) {
        let current = 0;
        const increment = Math.ceil(firstNum / 40);
        const timer = setInterval(() => {
          current += increment;
          if (current >= firstNum) {
            current = firstNum;
            clearInterval(timer);
          }
          el.textContent = current + '/' + secondPart;
        }, 30);
      }
      return;
    }
    
    // Handle regular values with "+" or other suffixes
    const target = originalText.replace(/[^0-9]/g, '');   // digits only
    const suffix = originalText.replace(/[0-9]/g, '');     // e.g. "+"
    if (!target) return; // skip if no digits found

    let current = 0;
    const increment = Math.ceil(Number(target) / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= Number(target)) {
        current = Number(target);
        clearInterval(timer);
      }
      el.textContent = current + suffix;
    }, 30);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  stats.forEach(s => statObserver.observe(s));

});