import Swiper from 'swiper/bundle';

const mainSliderElement = document.querySelector('[data-swiper="programs"]');
const prevButton = document.querySelector('[data-swiper="programs"] [data-swiper="button-prev"]');
const nextButton = document.querySelector('[data-swiper="programs"] [data-swiper="button-next"]');
const scrollbarElement = document.querySelector('[data-swiper="programs"] [data-swiper="scrollbar"]');

const programsSliderParameters = {
  loop: false,
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
  scrollbar: {
    el: scrollbarElement,
    hide: false,
    dragClass: 'programs__slider-scrollbar-drag',
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
      scrollbar: {
        dragSize: 392,
      },
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      allowTouchMove: true,
      scrollbar: {
        dragSize: 324,
      },
    },
    320: {
      scrollbar: {
        enabled: false,
      },
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
    },
  },
};

const initProgramsSlider = () => {
  if (mainSliderElement) {
    new Swiper(mainSliderElement, programsSliderParameters);
  }
};

export {initProgramsSlider};
