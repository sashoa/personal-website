function scroll(element, to, duration) {
  if (document.body.scrollTop === 0) return;
  let difference = to - element.scrollTop;
  var perTick = difference / duration * 2;

  setTimeout(function(){
    element.scrollTop = element.scrollTop + perTick;
    scroll(element, to, duration - 2);
  }, 10)
}
document.addEventListener('DOMContentLoaded', function(){
  let menu = document.querySelector('.main-nav');
  let goTop = document.getElementById('goTop');
  let a = document.querySelectorAll('.main-nav li a');
  let hamburger = document.getElementById('hamburger-menu');

  setInterval(function(){
    if (document.body.scrollTop > 0) {
      menu.classList.add('shrink');
      goTop.classList.add('display-goTop');
      a.forEach(function(element) {
        element.classList.add('link-color');
      }, this);
    }
    else {
      menu.classList.remove('shrink');
      goTop.classList.remove('display-goTop');
      a.forEach(function(element) {
      element.classList.remove('link-color');
      }, this);
    }
  }, 200);

  let hamburgerImageElement = '<img class="hamburger-open" src="img/hamburger.svg" alt="Open Hamburger">';
  let closeHamburgerImageElement = '<img src="img/close.svg" alt="Close Hamburger">';
  hamburger.addEventListener('click', function(event){
    if (event.target.classList.contains('hamburger-open')) {
      menu.classList.add('show-nav');
      event.target.outerHTML = closeHamburgerImageElement;
    }
    else {
      menu.classList.remove('show-nav');
      event.target.outerHTML = hamburgerImageElement;
    }
    
  });

  goTop.addEventListener('click', function(){
    let currentPosition = document.body.scrollTop;
    scroll(document.body, 0, 50);
  });
});