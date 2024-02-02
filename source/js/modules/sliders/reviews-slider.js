import Swiper from 'swiper/bundle';

const initReviewsSlider = () => {
  const mainSliderElement = document.querySelector('[data-reviews-slider]');
  const prevButton = document.querySelector('[data-reviews-slider-button-prev]');
  const nextButton = document.querySelector('[data-reviews-slider-button-next]');
  const scrollbarElement = document.querySelector('[data-reviews-slider-scrollbar]');

  const swiperReviews = new Swiper(mainSliderElement, {
    // Optional parameters
    loop: false,
    // autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    // Scrollbar
    scrollbar: {
      el: scrollbarElement,
      hide: false,
      dragClass: 'reviews__slider-scrollbar-drag',
    },

    breakpoints: {
      // when window width is >= 1440px
      1440: {
        slidesPerView: 2,
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
      // when window width is >= 320px
      320: {
        scrollbar: {
          enabled: false,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });
  return swiperReviews;
};

export {initReviewsSlider};
