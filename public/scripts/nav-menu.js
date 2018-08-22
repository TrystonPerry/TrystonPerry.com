const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

let isMenuVisible = false;

menuBtn.addEventListener('click', e => toggleMenu(e))

function toggleMenu(e) {
  e.preventDefault();
  if(isMenuVisible) {
    isMenuVisible = false;
    menu.style.display = 'none';
    e.target.style.color = 'white';
  } else {
    isMenuVisible = true;
    menu.style.display = 'block';
    e.target.style.color = '#0692FF';
  }
}