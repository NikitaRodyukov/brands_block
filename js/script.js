(function() {

    'use strict';
  
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:768px)' );
  
    // keep track of swiper instances to destroy later
    let mySwiper;
  
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    const breakpointChecker = function() {
  
      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches === true ) {
  
        // clean up old instances and inline styles when available
        if ( mySwiper !== undefined ) {
            mySwiper.destroy( true, true );
            
            const repairBlock = document.querySelector('.repair-block__items');
            const itemsWrapper = repairBlock.querySelector('.items__wrapper');
            repairBlock.classList.remove('swiper-container');
            itemsWrapper.classList.remove('swiper-wrapper');
            const items = itemsWrapper.querySelectorAll('.items__block');
            for (let i = 0; i < items.length; i++){
                items[i].classList.remove('swiper-slide');
            };
        }
        // or/and do nothing
        return;
  
        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {
  
          // fire small viewport version of swiper
          return enableSwiper();
  
        }
  
    };
    
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    const enableSwiper = function() {
  
      mySwiper = new Swiper('.swiper-container', {
        height: 72,
        slidesPerView: 'auto',
  
        spaceBetween: 16,
        keyboardControl: true,
  
        pagination: {
            el: '.swiper-pagination',
             clickable: true
        }    
  
      });
  
    };
  
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
  
    // kickstart
    breakpointChecker();
  
  
  
  })(); /* IIFE end */