document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Mobile menu toggle ─────────────────────────────────
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('mobile-menu--open', !isOpen);
    });

    // close when a mobile link is tapped
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('mobile-menu--open');
      });
    });
  }

  // ── 2. Hide header on scroll-down, reveal on scroll-up ────
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    if (currentY > lastScrollY && currentY > 60) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollY = currentY;
  }, { passive: true });

  // ── 3. Scroll-reveal on service rows ──────────────────────
  // Add the .reveal class to every element we want to animate in.
  // We target the layout wrapper inside each service row so the
  // entire text + image pair fades up together.
  const revealTargets = document.querySelectorAll(
    '.service-row__layout, .cta__inner'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        // unobserve after first reveal so the transition only runs once
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px'
  });

  revealTargets.forEach(el => revealObserver.observe(el));

  // ── 4. Staggered reveal for checklist / feature-list items ─
  // Each child inside these lists gets its own staggered delay
  // once the parent row becomes visible.
  function applyStagger(containerSelector, childSelector) {
    document.querySelectorAll(containerSelector).forEach(container => {
      const children = container.querySelectorAll(childSelector);
      children.forEach((child, i) => {
        child.style.opacity        = '0';
        child.style.transform      = 'translateX(-18px)';
        child.style.transition     = `opacity .4s ease ${i * 0.1}s, transform .4s ease ${i * 0.1}s`;
      });

      // fire once the parent layout wrapper is visible
      const parentRow = container.closest('.service-row__layout');
      if (!parentRow) return;

      const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            children.forEach(child => {
              child.style.opacity   = '1';
              child.style.transform = 'translateX(0)';
            });
            staggerObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      staggerObserver.observe(parentRow);
    });
  }

  applyStagger('.checklist',      '.checklist__item');
  applyStagger('.feature-list',   '.feature-list__item');
  applyStagger('.mode-grid',      '.mode-card');

});