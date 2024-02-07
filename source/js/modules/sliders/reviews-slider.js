import Swiper from 'swiper/bundle';

const mainSliderElement = document.querySelector('[data-swiper="reviews"]');
const prevButton = document.querySelector('[data-swiper="reviews"] [data-swiper="button-prev"]');
const nextButton = document.querySelector('[data-swiper="reviews"] [data-swiper="button-next"]');
const scrollbarElement = document.querySelector('[data-swiper="reviews"] [data-swiper="scrollbar"]');

const reviewsSliderParameters = {
  loop: false,
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
  scrollbar: {
    el: scrollbarElement,
    hide: false,
    dragClass: 'reviews__slider-scrollbar-drag',
  },
  breakpoints: {
    1440: {
      slidesPerView: 2,
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

const initReviewsSlider = () => {
  if (mainSliderElement) {
    new Swiper(mainSliderElement, reviewsSliderParameters);
  }
};

export {initReviewsSlider};
