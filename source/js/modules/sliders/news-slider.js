import Swiper from 'swiper/bundle';

const initNewsSlider = () => {
  const mainSliderElement = document.querySelector('[data-news-common-slider]');
  const prevButton = document.querySelector('[data-news-common-slider-button-prev]');
  const nextButton = document.querySelector('[data-news-common-slider-button-next]');
  const paginationElement = document.querySelector('[data-news-common-slider-pagination]');

  if (mainSliderElement) {
    const swiperNews = new Swiper(mainSliderElement, {
      // Optional parameters
      loop: false,
      // Navigation arrows
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      // Pagination
      pagination: {
        el: paginationElement,
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${ className }">${ index + 1 }</span>`;
        },
        bulletClass: 'news__slide-bullet',
        bulletActiveClass: 'news__slide-bullet--active',
      },
      //Breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          allowTouchMove: true,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },
        },
        // when window width is >= 768px
        768: {
          allowTouchMove: true,
          spaceBetween: 30,
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
        // when window width is >= 1440px
        1440: {
          allowTouchMove: false,
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
      },
    });
    return swiperNews;
  }
};

export {initNewsSlider};
