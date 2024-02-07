import Swiper from 'swiper/bundle';

const mainSliderElement = document.querySelector('[data-swiper="hero"]');

const heroSliderParameters = {
  loop: true,
  autoHeight: true,
  observer: true,
  pagination: {
    el: '.swiper-slide-active .hero__slide-bullets-wrapper',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button',
    bulletClass: 'hero__slide-bullet',
    bulletActiveClass: 'hero__slide-bullet--active',
  },
  on: {
    slideChangeTransitionStart: function () {
      this.pagination.init();
      this.pagination.render();
      this.pagination.update();
    }
  },
  // autoplay: {
  //   delay: 3000,
  // },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
    768: {
      allowTouchMove: true,
    },
    320: {
      allowTouchMove: true,
    },
  },
};


const initHeroSlider = () => {
  if (mainSliderElement) {
    new Swiper(mainSliderElement, heroSliderParameters);
  }
};

export {initHeroSlider};
