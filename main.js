// ── Countdown Timer ──────────────────────────────────────────────
// Update this date to the actual wedding date (YYYY-MM-DD HH:MM:SS)
const WEDDING_DATE = new Date('2025-12-31T18:00:00');

function updateCountdown() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<p style="color:#e8d5b0;font-family:\'Playfair Display\',serif;font-style:italic;font-size:1.4rem">🎉 Today is the day!</p>';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent    = String(days).padStart(2, '0');
  document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ── RSVP Form ─────────────────────────────────────────────────────
function handleRsvp(event) {
  event.preventDefault();

  const form    = event.target;
  const success = document.getElementById('rsvp-success');

  // Basic client-side feedback (connect to a backend / form service as needed)
  form.classList.add('hidden');
  success.classList.remove('hidden');
}

// ── Smooth active nav highlight ───────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => observer.observe(section));
