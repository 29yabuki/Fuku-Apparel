const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('aside ul li')
const loader = document.querySelector('.loader');
const main = document.querySelector('main');
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')


function init() {
    setTimeout(() => {
      loader.style.display = 'none';
      loader.style.opacity = 0;
  
      main.style.display = 'flex';
      setInterval(() => (main.style.opacity = 1), 50);
    }, 4000);
  }

init();

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('reveal')
    })
})

toggle.addEventListener('click', () => nav.classList.toggle('active'))

function hideAllContents() {
    contents.forEach(content => content.classList.remove('reveal'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}
