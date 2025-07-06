const header = document.getElementById('main-header');
let isScrolled = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 80 && !isScrolled) {
    header.classList.add('transitioning');
    requestAnimationFrame(() => {
      header.classList.add('scrolled');
      header.classList.remove('transitioning');
    });
    isScrolled = true;
  } else if (window.scrollY <= 80 && isScrolled) {
    header.classList.add('transitioning');
    requestAnimationFrame(() => {
      header.classList.remove('scrolled');
      header.classList.remove('transitioning');
    });
    isScrolled = false;
  }
});