const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 0
    },
  },
  loop: false,
  speed:400,
}); 

// фреймворк для создания слайдера