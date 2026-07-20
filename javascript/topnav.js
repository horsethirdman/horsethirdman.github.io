document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.top-nav');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const searchForm = document.getElementById('search-form');
  if (!searchForm) return;

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent navigation
    const raw = (searchForm.elements['search'] || {}).value || '';
    const safe = encodeURIComponent(raw);
    alert(`Not able to load the next page.
Message: I don't know PHP. As a result, the page does not exist and is not available.
Your input was "search=${safe}"
This service is unserviceable. Contact the owner of the website.`);
  });
});
