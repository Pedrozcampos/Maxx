/* ═══════════════════════════════════════════════
   MAXX IMOBILIÁRIA · main.js
═══════════════════════════════════════════════ */

// ── Hamburger menu ─────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close nav on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});


// ── Hero tabs (Comprar / Alugar) ──────────────
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});


// ── Scroll-reveal (Intersection Observer) ─────
const revealEls = document.querySelectorAll(
  '.service-card, .property-card, .about__text, .about__image, .contact__info, .contact__form-wrap, .stat'
);

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity  = '1';
      e.target.style.transform = 'translateY(0)';
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  revealObs.observe(el);
});


// ── Sticky navbar shadow on scroll ───────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(0,0,0,.5)'
    : '0 2px 12px rgba(0,0,0,.4)';
}, { passive: true });


// ── Form submission (demo) ────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Mensagem enviada!';
    btn.style.background = '#25a244';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Falar com um Consultor →';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3500);
  });
}
