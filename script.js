document.addEventListener("DOMContentLoaded", () => {
  // ── 3. Smooth-scroll for in-page anchors ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ── 5. Service cards – staggered entrance on scroll ───────
  const cards = document.querySelectorAll(".service-card");

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  cards.forEach((card, i) => {
    // initial hidden state
    card.style.opacity = "0";
    card.style.transform = "translateY(28px)";
    card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
    cardObserver.observe(card);
  });

  // ── 6. Stats counter – animate numbers on scroll into view ─
  const stats = document.querySelectorAll(".stat__value");

  function animateCounter(el) {
    const originalText = el.textContent;

    // Handle values with "/" (like "24/7")
    if (originalText.includes("/")) {
      const parts = originalText.split("/");
      const firstNum = parseInt(parts[0]) || 0;
      const secondPart = parts[1] || "";

      if (firstNum > 0) {
        let current = 0;
        const increment = Math.ceil(firstNum / 40);
        const timer = setInterval(() => {
          current += increment;
          if (current >= firstNum) {
            current = firstNum;
            clearInterval(timer);
          }
          el.textContent = current + "/" + secondPart;
        }, 30);
      }
      return;
    }

    // Handle regular values with "+" or other suffixes
    const target = originalText.replace(/[^0-9]/g, ""); // digits only
    const suffix = originalText.replace(/[0-9]/g, ""); // e.g. "+"
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

  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 },
  );

  stats.forEach((s) => statObserver.observe(s));

  // ── 7. Creative Services – tab switching ──────────────────
  const serviceNavItems = document.querySelectorAll(".services__nav-item");
  const serviceContents = document.querySelectorAll(".services__content");

  serviceNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      const serviceId = item.getAttribute("data-service");

      // Update nav items
      serviceNavItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      // Update content display
      serviceContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === `service-${serviceId}`) {
          content.classList.add("active");
        }
      });
    });
  });
});
