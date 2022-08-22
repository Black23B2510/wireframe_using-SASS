//Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//Responsive navbar
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.getElementById('main-nav__bar');
mobileMenu.onclick = function() {
  menu.classList.toggle('active')
}

//Scroll down
window.onscroll = function (){
  if ( document.documentElement.scrollTop > 80){
    document.getElementById('header').className = 'header';
  }else {
    document.getElementById('header').className = "";
  }
}

  