// Carbonara's — Sabor Artesanal
// Navbar state, mobile menu, scroll reveal, menu tabs, lightbox, back-to-top.

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Back to top (declared early: referenced by the scroll handler below) ---------- */
  const backToTop = document.getElementById('backToTop');
  function toggleBackToTop() {
    backToTop.classList.toggle('show', window.scrollY > 700);
    backToTop.classList.toggle('hide-btn', window.scrollY <= 700);
  }
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    toggleBackToTop();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Active nav link on scroll ---------- */
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const setActiveLink = () => {
    let current = sections[0]?.id;
    const scrollPos = window.scrollY + 120;
    for (const s of sections) {
      if (s.offsetTop <= scrollPos) current = s.id;
    }
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIconOpen = document.getElementById('iconMenu');
  const menuIconClose = document.getElementById('iconClose');
  let mobileOpen = false;
  const setMobileMenu = (open) => {
    mobileOpen = open;
    if (open) {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      mobileMenu.style.opacity = '1';
    } else {
      mobileMenu.style.maxHeight = '0px';
      mobileMenu.style.opacity = '0';
    }
    menuIconOpen.classList.toggle('hidden', open);
    menuIconClose.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
  };
  mobileMenu.style.maxHeight = '0px';
  mobileMenu.style.opacity = '0';
  menuBtn.addEventListener('click', () => setMobileMenu(!mobileOpen));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMobileMenu(false)));

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Menu category tabs ---------- */
  const tabs = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.id === target));
      tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  });

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const openLightbox = (src, caption) => {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightbox.classList.remove('hidden-lb');
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    lightbox.classList.add('hidden-lb');
    document.body.style.overflow = '';
    setTimeout(() => lightbox.classList.add('hidden'), 300);
  };
  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => openLightbox(el.dataset.lightbox, el.dataset.caption));
  });
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------- Current year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
