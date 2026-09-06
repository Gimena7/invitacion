// Fecha del evento: 17 de octubre de 2026, 21:00 h (hora local del visitante)
const EVENT_DATE = new Date('2026-10-17T21:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (diff <= 0) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Música de fondo
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

if (musicToggle && bgMusic) {
  let userPaused = false;

  const setPlayingState = (isPlaying) => {
    musicToggle.classList.toggle('is-playing', isPlaying);
    musicToggle.setAttribute('aria-pressed', String(isPlaying));
    musicToggle.setAttribute(
      'aria-label',
      isPlaying ? 'Pausar música de fondo' : 'Reproducir música de fondo'
    );
  };

  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
      userPaused = false;
    } else {
      bgMusic.pause();
      userPaused = true;
    }
  });

  bgMusic.addEventListener('play', () => setPlayingState(true));
  bgMusic.addEventListener('pause', () => setPlayingState(false));

  // Los navegadores bloquean el autoplay con sonido: se reproduce
  // automáticamente en la primera interacción del visitante con la página.
  const tryAutoplayOnce = () => {
    if (!userPaused && bgMusic.paused) {
      bgMusic.play().catch(() => {});
    }
    document.removeEventListener('click', tryAutoplayOnce);
    document.removeEventListener('touchstart', tryAutoplayOnce);
  };
  document.addEventListener('click', tryAutoplayOnce, { once: true });
  document.addEventListener('touchstart', tryAutoplayOnce, { once: true });
}

// Animación de aparición al hacer scroll
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach((el) => observer.observe(el));

// Destellos plateados animados en el hero
const sparkleCanvas = document.querySelector('.hero-sparkle');
if (sparkleCanvas) {
  const ctx = sparkleCanvas.getContext('2d');
  const hero = sparkleCanvas.parentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let dots = [];

  const resize = () => {
    sparkleCanvas.width = hero.clientWidth;
    sparkleCanvas.height = hero.clientHeight;
    const count = Math.floor((sparkleCanvas.width * sparkleCanvas.height) / 12000);
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * sparkleCanvas.width,
      y: Math.random() * sparkleCanvas.height,
      r: Math.random() * 1.4 + 0.4,
      baseAlpha: Math.random() * 0.5 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }));
  };

  const draw = (t) => {
    ctx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);
    dots.forEach((d) => {
      const twinkle = reducedMotion ? d.baseAlpha : d.baseAlpha + Math.sin(t / 1200 + d.phase) * 0.3;
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, twinkle)).toFixed(3)})`;
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });
    if (!reducedMotion) requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}
