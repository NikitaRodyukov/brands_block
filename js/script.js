//fucntion of disabilling swiper on 768 &mmore

(function() {

    'use strict';
  
    // breakpoint where swiper will be destroyed
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


const blockItems = document.querySelector('.items__wrapper');
const expand = document.querySelector('.repair-block__expand');
const expandIcon = expand.querySelector('.repair-block__expand__icon');
const brands = document.querySelectorAll('.items__block');
const repairBlock = document.querySelector('.repair-block')
const expandText = expand.querySelector('.repair-block__expand__text');
const breakpoint768 = window.matchMedia( '(min-width:768px)' );
const breakpoint1120 = window.matchMedia( '(min-width:1120px)' );

if (breakpoint1120.matches === true){
  for (let i = 8; i < brands.length; i++){
    brands[i].classList.add('items__block--hidden')
  }
}

else if (breakpoint768.matches === true){
  for (let i = 6; i < brands.length; i++){
    brands[i].classList.add('items__block--hidden')
  }
}

expand.addEventListener('click', function(){
  if (expand.classList.contains('repair-block__expand--false')){
    expand.classList.remove('repair-block__expand--false');
    expand.classList.add('repair-block__expand--expanded');
    blockItems.style.height = 480 + 'px';
    repairBlock.classList.add('repair-block--expanded')
    expandIcon.classList.add('repair-block__expand__icon--rotated');
    expandText.innerHTML = 'Скрыть';

    for (let i = 0; i < brands.length; i++){
      brands[i].classList.remove('items__block--hidden')
    }

  } else {
    repairBlock.classList.remove('repair-block--expanded')
    expand.classList.add('repair-block__expand--false');
    expandIcon.classList.remove('repair-block__expand__icon--rotated');
    blockItems.classList.remove('items__wrapper--expanded');
    expandText.innerHTML = 'Показать все';
    blockItems.style.height = null;
    
    if (breakpoint1120.matches === true){
      for (let i = 8; i < brands.length; i++){
        brands[i].classList.add('items__block--hidden')
      }
    }
    
    else if (breakpoint768.matches === true){
      for (let i = 6; i < brands.length; i++){
        brands[i].classList.add('items__block--hidden')
      }
    }
  }


});