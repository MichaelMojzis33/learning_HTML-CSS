const hamburgerContainer = document.querySelector('#header_nav');
const hamburger = document.querySelector('.header_nav-hamburger');
const links = document.querySelectorAll('.header_nav-links li');

hamburger.addEventListener('click', () => {
  hamburgerContainer.classList.toggle('clicked');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});
