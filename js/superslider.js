// PRELOADER
const preloader = document.querySelector('.preloader');
window.onload = function () {
  
  window.setTimeout(function () {
    preloader.classList.add('loaded');
    
  }, 500);
}




const swiperReviews = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});