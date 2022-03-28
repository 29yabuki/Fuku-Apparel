const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const loader = document.querySelector('.loader');
const main = document.querySelector('main');

toggle.addEventListener('click', () => nav.classList.toggle('active'))

function init() {
    setTimeout(() => {
      loader.style.display = 'none';
      loader.style.opacity = 0;
  
      main.style.display = 'flex';
      setInterval(() => (main.style.opacity = 1), 50);
    }, 4000);
  }

init();
