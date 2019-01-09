'use strict';

const Header = () => {
  var ticking = false;
  var lastScrollY;
  const header = document.querySelector('.header');
  const navlist = document.querySelector('.nav-list-left');
  const ctaitem = document.querySelector('.nav-list_item-cta');
  
  const mq = window.matchMedia('(min-width: 1201px)');

  /**
   * Callback for our scroll event - just
   * keeps track of the last scroll value
   */
  function onScroll() {
    lastScrollY = window.scrollY;
    requestTick();
  }

  /**
  * Calls rAF if it's not already
  * been done already
  */
  function requestTick() {
    if(!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  /**
  * Our animation callback
  */
  function update() {
    if (lastScrollY >= 20){
      //header.classList.add('fixed');
      //navlist.classList.add('nav-list-left-show');
    } else {
      //header.classList.remove('fixed');
      //navlist.classList.remove('nav-list-left-show');
    }

    if(mq.matches){
      if (lastScrollY >= 520){
        
        header.classList.add('fixed-cta');
       // ctaitem.classList.add('nav-list-right-cta');
      } else {
        header.classList.remove('fixed-cta');
       // ctaitem.classList.remove('nav-list-right-cta');
      }
    }
  // allow further rAFs to be called
    ticking = false;
  }

  // only listen for scroll events
  window.addEventListener('scroll', onScroll, false);
};

export default Header()