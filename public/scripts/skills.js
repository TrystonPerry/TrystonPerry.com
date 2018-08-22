let skills = document.getElementsByClassName('skill-obj');

ScrollReveal().reveal('.section-skills', {
  delay: 500,
  afterReveal: function() {
    for(let i = 0; i < skills.length; i++) {
      setTimeout(() => {
        skills[i].classList.add('circleZoomIn-play');
      }, i * 100);
    }
  }
});

var slideUp = {
  distance: '150%',
  origin: 'bottom',
  opacity: null,
  delay: 500
};

ScrollReveal().reveal('.project', slideUp);

var slideLeft = {
  distance: '150%',
  origin: 'right',
  opacity: null,
  delay: 500
};

ScrollReveal().reveal('.section-contact', slideLeft);