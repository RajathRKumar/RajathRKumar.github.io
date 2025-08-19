// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const id = this.getAttribute('href');
    if (id.startsWith('#')) {
      e.preventDefault();
      const sec = document.querySelector(id);
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    }
  });
});