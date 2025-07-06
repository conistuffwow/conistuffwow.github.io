const header = document.getElementById('main-header');

function updateHeaderOnScroll() {
  const isDesktop = window.innerWidth > 768;

  if (!isDesktop) {
    header.classList.remove('scrolled'); // always expanded on mobile
    return;
  }

  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeaderOnScroll);
window.addEventListener('resize', updateHeaderOnScroll);
window.addEventListener('load', updateHeaderOnScroll);