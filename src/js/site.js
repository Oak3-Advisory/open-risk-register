// Open Risk Register — site.js
// Lightweight interactivity for marketing pages (nav + FAQ accordion).

import { trackEvent } from './tracking.js';

// ── Mobile nav toggle ────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const siteNav   = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('is-open', !expanded);
  });
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !siteNav.contains(e.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    }
  });
}

// ── FAQ accordion ────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item     = btn.closest('.faq-item');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.closest('.faq-item').classList.remove('is-open');
    });
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      item.classList.add('is-open');
    }
  });
});

// ── Start assessment CTA tracking (marketing pages) ─────────
document.querySelectorAll('a[href="/app/"], a[href="/app"]').forEach(link => {
  link.addEventListener('click', () => {
    trackEvent('start_assessment_cta_click', {
      sourcePath: window.location.pathname,
      linkText: (link.textContent || '').trim(),
    });
  });
});
