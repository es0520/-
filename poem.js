// script.js
const flyBtn = document.getElementById('fly-btn');
const plane = document.querySelector('.paper-plane');

flyBtn.addEventListener('click', () => {
  plane.style.opacity = '1';
  plane.style.transition = 'transform 5s ease-out, bottom 5s ease-out';
  plane.style.transform = 'translate(-50%, -200%) rotate(360deg)';
  plane.style.bottom = '100%';

  setTimeout(() => {
    plane.style.opacity = '0';
    plane.style.transition = 'none';
    plane.style.transform = 'translate(-50%, 0) rotate(0)';
    plane.style.bottom = '-50px';
  }, 6000);
});
