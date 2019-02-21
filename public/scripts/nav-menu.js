const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

let isMenuVisible = false;

function toggleMenu(e) {
  if(isMenuVisible) {
    menu.classList.add('dragDownReverse-play');
    e.target.style.color = 'white';
    setTimeout(() => {
      isMenuVisible = false;
      menu.style.display = 'none';
      menu.classList.remove('dragDownReverse-play');
    },240)
   
  } else {
    isMenuVisible = true;
    menu.style.display = 'block';
    menu.classList.add('dragDown-play');
    setTimeout(() => {
      e.target.style.color = '#0692FF';
      menu.classList.remove('dragDown-play');
    }, 250);
  }
}

function viewMore(e) {
  e.preventDefault();
  e.target.classList.add('fadeOutText-play');
  const div = e.target.parentNode.getElementsByClassName('hidden')[0];
  div.style.display = 'block';
  div.classList.add('fadeInText-play');
}