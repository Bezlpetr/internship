import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';

const initHeroSlider = () => {
  const mainSliderElement = document.querySelector('[data-hero-slider]');
  // const paginationElement = document.querySelector('[data-hero-pagination]');

  if (mainSliderElement) {
    const swiperHero = new Swiper(mainSliderElement, {
      // Optional parameters
      loop: true,
      autoHeight: true,
      observer: true,
      // Pagination
      modules: [Pagination],
      pagination: {
        el: '.swiper-slide-active .hero__slide-bullets-wrapper',
        // el: paginationElement,
        type: 'bullets',
        clickable: true,
        bulletElement: 'button',
        bulletClass: 'hero__slide-bullet',
        bulletActiveClass: 'hero__slide-bullet--active',
      },
      on: {
        slideChangeTransitionStart: function () {
          swiperHero.pagination.init();
          swiperHero.pagination.render();
          swiperHero.pagination.update();
        }
      },
      // autoplay: {
      //   delay: 3000,
      // },
      //Breakpoints
      breakpoints: {
        // when window width is >= 1200px
        1440: {
          allowTouchMove: false,
        },
        // when window width is >= 768px
        768: {
          allowTouchMove: true,
        },
        // when window width is >= 0px
        0: {
          allowTouchMove: true,
        },
      },
    });
    return swiperHero;
  }
};

export {initHeroSlider};
