(function () {
  'use strict';

  const html = document.documentElement;

  // ── Theme Toggle ──
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  html.setAttribute('data-theme', savedTheme);

  themeToggle?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ── Version Switching ──
  const versionBtns = document.querySelectorAll('.version-btn');
  const savedVersion = localStorage.getItem('resumeVersion') || 'tech-detail';
  setVersion(savedVersion);

  versionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setVersion(btn.dataset.target);
    });
  });

  function setVersion(version) {
    html.setAttribute('data-version', version);
    localStorage.setItem('resumeVersion', version);
    versionBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.target === version);
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // ── Print / PDF Export ──
  const printBtn = document.getElementById('print-btn');
  printBtn?.addEventListener('click', () => {
    window.print();
  });
})();
