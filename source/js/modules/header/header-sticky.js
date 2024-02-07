const headerElement = document.querySelector('[data-header="sticky"]');

const headerHidden = () => headerElement.classList.contains('is-hidden'); // узнаем скрыт header или нет
let prevScroll = window.scrollY; // узнаем на сколько была прокручена страница ранее
let currentScroll; // на сколько прокручена страница сейчас (пока нет значения)

function onScrollHeader() {

  currentScroll = window.scrollY; // узнаем на сколько прокрутили страницу

  if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
    headerElement.classList.add('is-hidden'); // то скрываем header
  }
  if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
    headerElement.classList.remove('is-hidden'); // то отображаем header
  }
  prevScroll = currentScroll; // записываем на сколько прокручена страница на данный момент
}

const initHeaderSticky = () => {
  window.addEventListener('scroll', onScrollHeader);
};

const cancelHeaderSticky = () => {
  window.removeEventListener('scroll', onScrollHeader);
};

export {initHeaderSticky, cancelHeaderSticky};
