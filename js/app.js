

// MOBILE MENU

const menuBtn = document.querySelector('.header-mobile_item')
const mobileMenu = document.querySelector('.header-mobile')

menuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    document.body.classList.toggle('hidden')
})


// REVIEWS TABS
const feedbackItem = document.querySelectorAll('.reviews-text');
const plusItems = document.querySelectorAll('.plus-items');

feedbackItem.forEach((item)=> {
    item.addEventListener('click', ()=> {
        if (item.parentNode.classList.contains('active')) {
            item.parentNode.classList.remove('active');
            item.nextElementSibling.style.maxHeight = 0;
        } else {
            item.parentNode.classList.add('active');
            item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';
        }
    })
})

plusItems.forEach((item)=> {
  item.addEventListener('click', ()=> {
      if (item.parentNode.classList.contains('active')) {
          item.parentNode.classList.remove('active');
          item.previousElementSibling.style.maxHeight = 0;
      } else {
          item.parentNode.classList.add('active');
          item.previousElementSibling.style.maxHeight = item.previousElementSibling.scrollHeight + 'px';
      }
  })
})





// PRELOADER
const preloader = document.querySelector('.preloader');
window.onload = function () {
  
  window.setTimeout(function () {
    preloader.classList.add('loaded');
    
  }, 500);
}


// SLIDER ABOUT PAGE
var swiperAbout = new Swiper(".slider-about", {
  slidesPerView: 3.5,
 
  spaceBetween: 40,
  // initialSlide: 1,
  navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
  }
});
  


// SLIDER reviews
const swiperReviews = new Swiper(".swiper-reviews", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  // initialSlide: 1,
  navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
  }
});


// SLIDER CONSULTATION HEADER
var swiperConsultation = new Swiper(".consultation-slider-header", {
  slidesPerView: 3.5,
  spaceBetween: 40,
  navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3.5,
      spaceBetween: 40,
      grid: {
        fill: 'row',
      }
    },
    1200: {
      slidesPerView: 3,
      grid: {
        fill: 'row',
      }
    },   
  }
});


// SLIDER CONSULTATION MOB

let swiperConsultationMob = new Swiper(".consultation-slider-header-mob", {
  navigation: {
    nextEl: ".arrow-mob-right",
    prevEl: ".arrow-mob-left",
  },
});