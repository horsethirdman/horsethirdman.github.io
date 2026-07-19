const menuToggle = document.querySelector('.hamburger');
const navLinks = document.querySelector('.top-nav');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
