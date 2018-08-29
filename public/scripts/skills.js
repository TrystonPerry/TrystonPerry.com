let skills = document.getElementsByClassName('skill-obj');

if(document.getElementsByTagName('body')[0].clientWidth > 600) {
  ScrollReveal().reveal('.skills', {
    afterReveal: loadSkills
  });
  
  var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
  };
  
  ScrollReveal().reveal('.project', slideUp);
  
  var slideLeft = {
    distance: '150%',
    origin: 'right',
    opacity: null
  };
  
  ScrollReveal().reveal('.section-contact', slideLeft);
} else {
  loadSkills();
}

function loadSkills() {
  for(let i = 0; i < skills.length; i++) {
    setTimeout(() => {
      skills[i].classList.add('circleZoomIn-play');
    }, i * 50);
  }
}