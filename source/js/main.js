// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

// import {iosVhFix} from './utils/ios-vh-fix';
import './utils/focus-lock';
import './utils/scroll-lock';
import './utils/ios-checker';
import {CustomSelect} from './modules/custom-select/custom-select';
// import {Burger} from './vendor/header/burger';
// import {StickyHeader} from './vendor/header/sticky-header';
// import {initLocomotiveScroll} from './vendor/header/init-locomotive-scroll';

import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordion';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initHeroSlider} from './modules/sliders/hero-slider';
import {initProgramsSlider} from './modules/sliders/programs-slider';
import {initNewsSlider} from './modules/sliders/news-slider';
import {initReviewsSlider} from './modules/sliders/reviews-slider';
import {initMenu} from './modules/menu/menu';
import {initHeaderSticky} from './modules/header/header-sticky';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // initLocomotiveScroll();

  initMenu();
  initHeaderSticky();
  // Modules
  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // const burger = new Burger();
    // burger.init();
    // const stickyHeader = new StickyHeader();
    // stickyHeader.init();
    initHeroSlider();
    initProgramsSlider();
    initNewsSlider();
    initReviewsSlider();
    initModals();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    initTabs();
    initAccordions();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
