(function () {

  // Scroll to element function.  
  function scrollTo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  // Scroll animation type
  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('.main-nav');
    let a = document.querySelectorAll('.main-nav li a');
    let hamburger = document.getElementById('hamburger-menu');

    // Make the menu heigth smaller when not on top
    setInterval(function () {
      if (document.body.scrollTop > 0) {
        menu.classList.add('shrink');
        goTop.classList.add('display-goTop');
        a.forEach(function (element) {
          element.classList.add('link-color');
        }, this);
      }
      else {
        menu.classList.remove('shrink');
        goTop.classList.remove('display-goTop');
        a.forEach(function (element) {
          element.classList.remove('link-color');
        }, this);
      }
    }, 200);

    // Add hamburger menu behavior
    let hamburgerImageElement = '<img class="hamburger-open" src="img/hamburger.svg" alt="Open Hamburger">';
    let closeHamburgerImageElement = '<img src="img/close.svg" alt="Close Hamburger">';
    hamburger.addEventListener('click', function (event) {
      if (event.target.classList.contains('hamburger-open')) {
        menu.classList.add('show-nav');
        event.target.outerHTML = closeHamburgerImageElement;
      }
      else {
        menu.classList.remove('show-nav');
        event.target.outerHTML = hamburgerImageElement;
      }

    });


    // Go to top of the document on goTop element click
    let goTop = document.getElementById('goTop');
    goTop.addEventListener('click', function () {
      scrollTo(document.body, 0, 500);
    });


    // Go to section
    menu.addEventListener('click', function () {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        event.stopPropagation();
        let goToLink = event.target.getAttribute('href');
        let destination = document.querySelector(goToLink);
        let destinationOffset = destination.offsetTop;
        scrollTo(document.body, destinationOffset, 500);
      }
    });



  });

})();