/* ── CONFIG ── */
const TOTAL_FRAMES = 120;
const FRAME_PATH   = 'frames/frame_';
const SNAP_ZONES   = [0.16, 0.38, 0.61, 0.84];
const SNAP_RADIUS  = 0.022;
const HOLD_MS      = 480;

/* ── STATE ── */
const frames     = new Array(TOTAL_FRAMES);
let loaded       = 0;
let allLoaded    = false;
let lastFrameI   = -1;
let rafPending   = false;
let isSnapping   = false;
const snapped    = new Set();
let targetFrameI = 0;

/* ── ELEMENTS ── */
const loader          = document.getElementById('loader');
const loaderBar       = document.getElementById('loader-bar');
const loaderStatus    = document.getElementById('loader-status');
const navbar          = document.getElementById('navbar');
const navLinks        = document.getElementById('nav-links');
const hamburger       = document.getElementById('nav-hamburger');
const navLogo         = document.getElementById('nav-logo');
const pageProgress    = document.getElementById('page-progress');
const scrollSection   = document.getElementById('scroll-animation');
const scrollCanvas    = document.getElementById('scroll-canvas');
const sectionBar      = document.getElementById('section-progress-bar');
const canvasHint      = document.getElementById('canvas-hint');
const annotCards      = document.querySelectorAll('.annotation-card');
const cardDots        = document.querySelectorAll('.card-dot');
const heroSub         = document.getElementById('hero-sub');
const heroActions     = document.getElementById('hero-actions');
const cursorDot       = document.getElementById('cursor-dot');
const cursorRing      = document.getElementById('cursor-ring');
const cursorGlow      = document.getElementById('cursor-glow');
const ctx             = scrollCanvas.getContext('2d');

/* ════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════ */
let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;
let glowX  = 0, glowY  = 0;

if (!('ontouchstart' in window)) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursorDot.style.left  = mouseX + 'px';
    cursorDot.style.top   = mouseY + 'px';
  });

  ;(function animCursor() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    glowX += (mouseX - glowX) * 0.07;
    glowY += (mouseY - glowY) * 0.07;
    cursorRing.style.left  = ringX + 'px';
    cursorRing.style.top   = ringY + 'px';
    cursorGlow.style.left  = glowX + 'px';
    cursorGlow.style.top   = glowY + 'px';
    requestAnimationFrame(animCursor);
  })();

  document.querySelectorAll('a, button, .feature-card, .pricing-card, .spec-item').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-active'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-active'));
} else {
  // Hide cursor elements on touch
  [cursorDot, cursorRing, cursorGlow].forEach(el => { if (el) el.style.display = 'none'; });
}

/* ════════════════════════════════════════
   ANIMATED FILM GRAIN
════════════════════════════════════════ */
;(function initGrain() {
  const SIZE = 256;
  const gc   = document.createElement('canvas');
  gc.width   = SIZE; gc.height = SIZE;
  const gx   = gc.getContext('2d');

  const div = document.createElement('div');
  div.style.cssText = `position:fixed;inset:0;z-index:998;pointer-events:none;opacity:0.055;
    background-repeat:repeat;background-size:${SIZE}px ${SIZE}px;`;
  document.body.appendChild(div);

  function drawGrain() {
    const d = gx.createImageData(SIZE, SIZE);
    for (let i = 0; i < d.data.length; i += 4) {
      const v = Math.random() * 255;
      d.data[i] = d.data[i+1] = d.data[i+2] = v;
      d.data[i+3] = 255;
    }
    gx.putImageData(d, 0, 0);
    div.style.backgroundImage = `url(${gc.toDataURL()})`;
    setTimeout(() => requestAnimationFrame(drawGrain), 80);
  }
  drawGrain();
})();

/* ════════════════════════════════════════
   STARS
════════════════════════════════════════ */
;(function initStars() {
  const sc = document.getElementById('stars-canvas');
  const sx = sc.getContext('2d');
  const COUNT = 160;
  const stars = Array.from({ length: COUNT }, () => ({
    x:     Math.random(),
    y:     Math.random(),
    r:     Math.random() * 1.2 + 0.3,
    vx:    (Math.random() - 0.5) * 0.00012,
    vy:    (Math.random() - 0.5) * 0.00012,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.008 + 0.003,
  }));

  function resize() { sc.width = window.innerWidth; sc.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  ;(function drawStars() {
    sx.clearRect(0, 0, sc.width, sc.height);
    t += 0.016;
    for (const s of stars) {
      s.x += s.vx; s.y += s.vy;
      if (s.x < 0) s.x = 1; if (s.x > 1) s.x = 0;
      if (s.y < 0) s.y = 1; if (s.y > 1) s.y = 0;
      const opacity = 0.2 + 0.4 * Math.sin(t * s.speed * 60 + s.phase);
      sx.beginPath();
      sx.arc(s.x * sc.width, s.y * sc.height, s.r, 0, Math.PI * 2);
      sx.fillStyle = `rgba(255,255,255,${opacity})`;
      sx.fill();
    }
    requestAnimationFrame(drawStars);
  })();
})();

/* ════════════════════════════════════════
   TEXT SCRAMBLE
════════════════════════════════════════ */
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

function scrambleText(el, finalText, duration = 900, delay = 0) {
  const totalFrames = Math.ceil(duration / 18);
  let frame = 0;
  setTimeout(() => {
    const iv = setInterval(() => {
      const progress = frame / totalFrames;
      el.textContent = finalText.split('').map((ch, i) => {
        if (ch === ' ') return ' ';
        if (progress > i / finalText.length) return ch;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }).join('');
      frame++;
      if (frame > totalFrames) { el.textContent = finalText; clearInterval(iv); }
    }, 18);
  }, delay);
}

/* ════════════════════════════════════════
   SECTION HEADING WORD REVEALS
════════════════════════════════════════ */
function initHeadingReveals() {
  document.querySelectorAll('.section-header h2').forEach(h2 => {
    // Split preserving <br>
    const parts = h2.innerHTML.split('<br>');
    h2.innerHTML = parts.map(part =>
      part.trim().split(/\s+/).map(word =>
        `<span class="h2-word"><span class="h2-inner">${word}</span></span>`
      ).join(' ')
    ).join('<br>');

    const obs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      h2.querySelectorAll('.h2-inner').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 90);
      });
      obs.unobserve(h2);
    }, { threshold: 0.3 });
    obs.observe(h2);
  });
}

/* ════════════════════════════════════════
   BUTTON RIPPLE
════════════════════════════════════════ */
function initRipple() {
  document.querySelectorAll('.btn-pill, .btn-ghost, .pricing-btn-primary, .pricing-btn-secondary').forEach(btn => {
    btn.addEventListener('click', e => {
      const r    = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 2;
      const rip  = document.createElement('span');
      rip.className = 'ripple';
      rip.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size/2}px;top:${e.clientY - r.top - size/2}px`;
      btn.appendChild(rip);
      setTimeout(() => rip.remove(), 600);
    });
  });
}

/* ════════════════════════════════════════
   CARD 3D TILT
════════════════════════════════════════ */
function initTilt() {
  document.querySelectorAll('.feature-card, .pricing-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = (e.clientX - r.left) / r.width  - 0.5;
      const y  = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transition = 'transform 0.08s ease';
      card.style.transform  = `perspective(700px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translateZ(6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
      card.style.transform  = '';
    });
  });
}

/* ════════════════════════════════════════
   LOGO GLITCH
════════════════════════════════════════ */
function initLogoGlitch() {
  if (!navLogo) return;
  function glitch() {
    navLogo.classList.add('glitching');
    setTimeout(() => navLogo.classList.remove('glitching'), 380);
    setTimeout(glitch, 4000 + Math.random() * 6000);
  }
  setTimeout(glitch, 3000 + Math.random() * 3000);
}

/* ════════════════════════════════════════
   HERO PARALLAX (glows move on scroll)
════════════════════════════════════════ */
const heroGlow1 = document.querySelector('.hero-glow');
const heroGlow2 = document.querySelector('.hero-glow-accent');
function updateHeroParallax() {
  const y = window.scrollY;
  if (heroGlow1) heroGlow1.style.transform = `translateX(-50%) translateY(${y * 0.25}px)`;
  if (heroGlow2) heroGlow2.style.transform = `translateX(-50%) translateY(${y * 0.4}px)`;
}

/* ════════════════════════════════════════
   FRAME LOADING
════════════════════════════════════════ */
function loadFrames() {
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = `${FRAME_PATH}${String(i + 1).padStart(4, '0')}.jpg`;
    img.onload = img.onerror = () => {
      loaded++;
      const pct = Math.round((loaded / TOTAL_FRAMES) * 100);
      loaderBar.style.width  = pct + '%';
      loaderStatus.textContent = `Loading ${pct}%`;
      if (loaded === TOTAL_FRAMES) onAllLoaded();
    };
    frames[i] = img;
  }
}

function onAllLoaded() {
  allLoaded = true;
  loaderBar.style.width    = '100%';
  loaderStatus.textContent = 'Ready';
  setTimeout(() => {
    loader.classList.add('done');
    triggerHeroAnimations();
    drawFrame(0);
  }, 300);
}

/* ════════════════════════════════════════
   HERO ANIMATIONS
════════════════════════════════════════ */
function triggerHeroAnimations() {
  // Word reveals
  document.querySelectorAll('.word-inner').forEach(el => el.classList.add('visible'));

  // Scramble the eyebrow
  const eyebrow = document.querySelector('.hero .eyebrow');
  if (eyebrow) {
    const original = eyebrow.textContent;
    scrambleText(eyebrow, original, 1000, 300);
  }

  setTimeout(() => {
    heroSub.classList.add('visible');
    heroActions.classList.add('visible');
  }, 250);
}

/* ════════════════════════════════════════
   CANVAS
════════════════════════════════════════ */
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  scrollCanvas.width  = window.innerWidth  * dpr;
  scrollCanvas.height = window.innerHeight * dpr;
  scrollCanvas.style.width  = window.innerWidth  + 'px';
  scrollCanvas.style.height = window.innerHeight + 'px';
  ctx.scale(dpr, dpr);
  if (allLoaded && lastFrameI >= 0) drawFrame(lastFrameI);
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawFrame(index) {
  const i   = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
  const img = frames[i];
  if (!img || !img.complete || !img.naturalWidth) return;

  const W = window.innerWidth, H = window.innerHeight;
  const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
  const sw = img.naturalWidth * scale, sh = img.naturalHeight * scale;

  ctx.clearRect(0, 0, W, H);
  ctx.drawImage(img, (W - sw) / 2, (H - sh) / 2, sw, sh);

  // Vignette
  const vign = ctx.createRadialGradient(W/2, H/2, H*0.2, W/2, H/2, H*0.88);
  vign.addColorStop(0, 'rgba(7,8,10,0)');
  vign.addColorStop(1, 'rgba(7,8,10,0.75)');
  ctx.fillStyle = vign;
  ctx.fillRect(0, 0, W, H);

  // Bottom gradient (Veo watermark cover)
  const bot = ctx.createLinearGradient(0, H - 90, 0, H);
  bot.addColorStop(0, 'rgba(7,8,10,0)');
  bot.addColorStop(1, 'rgba(7,8,10,1)');
  ctx.fillStyle = bot;
  ctx.fillRect(0, H - 90, W, 90);

  lastFrameI = i;
}

/* ════════════════════════════════════════
   SCROLL HANDLER
════════════════════════════════════════ */
function getSectionProgress() {
  const rect  = scrollSection.getBoundingClientRect();
  const total = scrollSection.offsetHeight - window.innerHeight;
  return Math.max(0, Math.min(1, -rect.top / total));
}

function onScroll() {
  // Page progress
  const docH  = document.documentElement.scrollHeight - window.innerHeight;
  pageProgress.style.width = (window.scrollY / docH * 100) + '%';

  // Navbar
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  // Hero parallax
  updateHeroParallax();

  if (!allLoaded) return;

  const p = getSectionProgress();
  sectionBar.style.width = (p * 100) + '%';
  if (canvasHint) canvasHint.style.opacity = p < 0.04 ? '1' : '0';

  targetFrameI = Math.round(p * (TOTAL_FRAMES - 1));
  if (!rafPending) { rafPending = true; requestAnimationFrame(renderFrame); }

  updateCards(p);
  updateDots(p);
  checkSnap(p);
}

function renderFrame() {
  rafPending = false;
  if (targetFrameI !== lastFrameI) drawFrame(targetFrameI);
}

/* ════════════════════════════════════════
   ANNOTATION CARDS
════════════════════════════════════════ */
function updateCards(p) {
  annotCards.forEach(card => {
    const show = parseFloat(card.dataset.show);
    const hide = parseFloat(card.dataset.hide);
    const active = p >= show && p < hide;
    const wasVisible = card.classList.contains('visible');
    if (active && !wasVisible) {
      card.classList.remove('exiting');
      void card.offsetWidth; // force reflow for re-entry
      card.classList.add('visible');
    } else if (!active && wasVisible) {
      card.classList.remove('visible');
      card.classList.add('exiting');
      setTimeout(() => card.classList.remove('exiting'), 400);
    }
  });
}

/* ════════════════════════════════════════
   CARD PROGRESS DOTS
════════════════════════════════════════ */
const cardShowThresholds = [0.06, 0.27, 0.50, 0.73];

function updateDots(p) {
  let activeIdx = -1;
  for (let i = cardShowThresholds.length - 1; i >= 0; i--) {
    if (p >= cardShowThresholds[i]) { activeIdx = i; break; }
  }
  cardDots.forEach((dot, i) => dot.classList.toggle('active', i === activeIdx));
}

/* ════════════════════════════════════════
   SNAP ZONES
════════════════════════════════════════ */
function checkSnap(p) {
  if (isSnapping) return;
  for (const zone of SNAP_ZONES) {
    if (snapped.has(zone)) continue;
    if (Math.abs(p - zone) < SNAP_RADIUS) {
      isSnapping = true;
      snapped.add(zone);
      const total  = scrollSection.offsetHeight - window.innerHeight;
      window.scrollTo({ top: scrollSection.offsetTop + zone * total, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
      setTimeout(() => { document.body.style.overflow = ''; isSnapping = false; }, HOLD_MS);
      break;
    }
  }
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ════════════════════════════════════════
   COUNT UP
════════════════════════════════════════ */
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el  = e.target;
    const end = parseFloat(el.dataset.count);
    countObs.unobserve(el);
    const t0  = performance.now();
    const dur = 1600;
    ;(function tick(now) {
      const ease = 1 - Math.pow(1 - Math.min((now - t0) / dur, 1), 3);
      el.textContent = end % 1 ? (end * ease).toFixed(1) : Math.round(end * ease);
      if (ease < 1) requestAnimationFrame(tick);
    })(t0);
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

/* ════════════════════════════════════════
   FADE UP
════════════════════════════════════════ */
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));

/* ════════════════════════════════════════
   NAVBAR HAMBURGER
════════════════════════════════════════ */
hamburger && hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

/* ════════════════════════════════════════
   MAGNETIC BUTTONS
════════════════════════════════════════ */
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r  = btn.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width  / 2);
    const dy = e.clientY - (r.top  + r.height / 2);
    btn.style.transition = 'transform 0.1s ease';
    btn.style.transform  = `translate(${dx * 0.28}px,${dy * 0.28}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
    btn.style.transform  = '';
  });
});

/* ════════════════════════════════════════
   SMOOTH ANCHOR SCROLL
════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    navLinks.classList.remove('open');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */
initHeadingReveals();
initRipple();
initTilt();
initLogoGlitch();
loadFrames();
