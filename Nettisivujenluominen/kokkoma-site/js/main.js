/* Kokkoma Oy — minimal vanilla JS */

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;
  const fab = document.querySelector('.fab-call');

  // Sticky nav border on scroll + show FAB after 200px
  const onScroll = () => {
    if (window.scrollY > 8) nav?.classList.add('scrolled');
    else nav?.classList.remove('scrolled');

    if (fab) {
      if (window.scrollY > 200) fab.classList.add('visible');
      else fab.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-mobile a').forEach(a => {
    a.addEventListener('click', () => {
      body.classList.remove('nav-open');
      body.style.overflow = '';
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Hero stat counter (one-shot when hero enters viewport)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const dur = 1200;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased).toString();
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => io.observe(c));
  } else {
    counters.forEach(c => { c.textContent = c.dataset.count; });
  }

  // Contact form — basic client-side validation + mailto fallback
  const form = document.querySelector('form[data-mailto]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const to = form.dataset.mailto;
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const subject = (data.get('subject') || 'Yhteydenotto').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) {
        const status = form.querySelector('.form-status');
        if (status) status.textContent = 'Täytäthän nimen, sähköpostin ja viestin.';
        return;
      }

      const body = `Nimi: ${name}%0D%0ASähköposti: ${email}%0D%0APuhelin: ${phone}%0D%0A%0D%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  }
});
