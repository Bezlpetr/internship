import {initHeaderSticky, cancelHeaderSticky} from '../header/header-sticky';

const headerElement = document.querySelector('[data-header]');
const navigationToggleElement = document.querySelector('[data-navigation-toggle]');
const menuButtons = document.querySelectorAll('[data-navigation-button]');
const iconToggleElement = document.querySelector('[data-navigation-toggle] use');
const pageBodyOverlayElement = document.querySelector('[data-wrapper-overlay]');

const isEnterKey = (evt) => evt.key === 'Enter';
const isSpaceKey = (evt) => evt.key === ' ';
const isEscapeKey = (evt) => evt.key === 'Escape';

const changeToggleIcon = () => {
  if (iconToggleElement) {
    if (iconToggleElement.getAttribute('href').includes('icon-burger')) {
      iconToggleElement.setAttribute('href', '__spritemap#sprite-icon-cross');
    } else {
      iconToggleElement.setAttribute('href', '__spritemap#sprite-icon-burger');
    }
  }
};

const closeSubmenu = () => {
  const allSublistElements = document.querySelectorAll('[data-navigation-item-with-submenu]');

  allSublistElements.forEach((element) => {
    if (element.classList.contains('is-open')) {
      element.classList.remove('is-open');
    }
  });
};

const openMenu = () => {
  if (headerElement && navigationToggleElement && pageBodyOverlayElement) {
    pageBodyOverlayElement.classList.remove('visually-hidden');
    headerElement.classList.add('is-open');
    navigationToggleElement.classList.remove('is-passive');
    navigationToggleElement.classList.add('btn--blue-background', 'is-active');
    changeToggleIcon();
    // document.body.style.overflowY = 'hidden';
    window.focusLock.lock('.header__navigation-list');
    window.scrollLock.disableScrolling();
    cancelHeaderSticky();
    setNavigationButtonsListener();
    setWindowListener();
  }
};

const closeMenu = () => {
  if (headerElement && navigationToggleElement && pageBodyOverlayElement) {
    pageBodyOverlayElement.classList.add('visually-hidden');
    headerElement.classList.remove('is-open');
    navigationToggleElement.classList.remove('btn--blue-background', 'is-active');
    navigationToggleElement.classList.add('is-passive');
    changeToggleIcon();
    window.focusLock.unlock();
    closeSubmenu();
    window.scrollLock.enableScrolling();
    // document.body.style.overflowY = 'visible';
    initHeaderSticky();
    removeNavigationButtonsListener();
    removeWindowListener();
  }
};

function onMenuButtonClick (evt) {
  if (evt.target.closest('[data-navigation-item-with-submenu]') && !(evt.target.closest('[data-navigation-submenu]'))) {
    evt.preventDefault();
    evt.stopPropagation();
    const subListElement = evt.target.closest('[data-navigation-item-with-submenu]');
    subListElement.classList.toggle('is-open');
  } else {
    evt.stopPropagation();
    closeMenu();
  }
}

function onMenuButtonKeydown (evt) {
  if (isEnterKey(evt) || isSpaceKey(evt)) {
    if (evt.target.closest('[data-navigation-item-with-submenu]') && !(evt.target.closest('[data-navigation-submenu]'))) {
      evt.preventDefault();
      const subListElement = evt.target.closest('[data-navigation-item-with-submenu]');
      subListElement.classList.toggle('is-open');
    } else {
      closeMenu();
    }
  }
}

function onWindowKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
}

function onWindowClick(evt) {
  if (!(evt.target.classList.contains('[data-navigation-button])'))) {
    evt.preventDefault();
    closeMenu();
  }
}

function setNavigationButtonsListener() {
  menuButtons.forEach((button) => {
    button.addEventListener('click', onMenuButtonClick);
    button.addEventListener('keydown', onMenuButtonKeydown);
  });
}

function removeNavigationButtonsListener() {
  menuButtons.forEach((button) => {
    button.removeEventListener('click', onMenuButtonClick);
    button.removeEventListener('keydown', onMenuButtonKeydown);
  });
}

const onNavigationToggleClick = (evt) => {
  if (headerElement) {
    if (headerElement.classList.contains('is-open')) {
      closeMenu();
      evt.stopPropagation();
    } else {
      openMenu();
      evt.stopPropagation();
    }
  }
};

const setNavigationToggleListener = () => {
  navigationToggleElement.addEventListener('click', onNavigationToggleClick);
};

function setWindowListener() {
  window.addEventListener('keydown', onWindowKeydown);
  window.addEventListener('click', onWindowClick);
}

function removeWindowListener() {
  window.removeEventListener('keydown', onWindowKeydown);
  window.removeEventListener('click', onWindowClick);
}

const initMenu = () => {
  if (headerElement && navigationToggleElement && iconToggleElement) {
    if (headerElement.classList.contains('is-open')) {
    // headerElement.classList.remove('header--nojs');
      headerElement.classList.remove('is-open');
      if (navigationToggleElement.classList.contains('is-active')) {
        navigationToggleElement.classList.remove('btn--blue-background', 'is-active');
        navigationToggleElement.classList.add('is-passive');
      }
      if (iconToggleElement.getAttribute('href').includes('icon-cross')) {
        iconToggleElement.setAttribute('href', '__spritemap#sprite-icon-burger');
      }
      setNavigationToggleListener();
    } else {
      setNavigationToggleListener();
    }
  }
};

export {initMenu};
