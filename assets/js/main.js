document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');
  var mobileNavClose = document.getElementById('mobileNavClose');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileNavClose && mobileNav) {
    mobileNavClose.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  var servicesToggle = document.getElementById('mobileServicesToggle');
  var servicesList = document.getElementById('mobileServicesList');
  if (servicesToggle && servicesList) {
    servicesToggle.addEventListener('click', function (e) {
      e.preventDefault();
      servicesList.classList.toggle('open');
    });
  }

  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action');
      var hasRealEndpoint = action && action.indexOf('FORMSPREE_ENDPOINT') === -1 && action.trim() !== '';
      if (!hasRealEndpoint) {
        // No backend connected yet — show local success message only.
        // See SETUP.md for how to connect Formspree/Netlify Forms so this
        // actually delivers an email.
        e.preventDefault();
        var msg = document.getElementById('formSuccess');
        form.style.display = 'none';
        if (msg) msg.style.display = 'block';
      }
      // If a real endpoint is configured, let the form submit normally.
    });
  }
});
