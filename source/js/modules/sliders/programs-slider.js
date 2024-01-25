import Swiper from 'swiper/bundle';

const initProgramsSlider = () => {
  const mainSliderElement = document.querySelector('[data-programs-slider]');
  const prevButton = document.querySelector('[data-programs-slider-button-prev]');
  const nextButton = document.querySelector('[data-programs-slider-button-next]');
  const scrollbarElement = document.querySelector('[data-programs-slider-scrollbar]');

  const swiperPrograms = new Swiper(mainSliderElement, {
    // Optional parameters
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    // Scrollbar
    scrollbar: {
      el: scrollbarElement,
      hide: false,
      dragClass: 'programs__slider-scrollbar-drag',
    },

    breakpoints: {
      // when window width is >= 1440px
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
        scrollbar: {
          dragSize: 392,
        },
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
        scrollbar: {
          dragSize: 324,
        },
      },
      // when window width is >= 0px
      0: {
        scrollbar: {
          enabled: false,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });
  return swiperPrograms;
};

export {initProgramsSlider};
