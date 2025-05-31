// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
  
    if (toggle) {
      toggle.addEventListener('click', () => {
        links.classList.toggle('active');
      });
    }
  });