import Swiper from 'swiper/bundle';

const mainSliderElement = document.querySelector('[data-swiper="news-common"]');
const paginationElement = document.querySelector('[data-swiper="news-common"] [data-swiper="pagination"]');
const prevButton = document.querySelector('[data-swiper="news-common"] [ data-swiper="button-prev"]');
const nextButton = document.querySelector('[data-swiper="news-common"] [data-swiper="button-next"]');

const newsSliderParameters = {
  loop: false,
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
  pagination: {
    el: paginationElement,
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${ className }">${ index + 1 }</span>`;
    },
    bulletClass: 'news__slide-bullet',
    bulletActiveClass: 'news__slide-bullet--active',
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
    768: {
      allowTouchMove: true,
      spaceBetween: 30,
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    320: {
      allowTouchMove: true,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
  },
};

const initNewsSlider = () => {

  if (mainSliderElement) {
    if (mainSliderElement) {
      new Swiper(mainSliderElement, newsSliderParameters);
    }
  }
};

export {initNewsSlider};
