import {modals} from '../modals/init-modals';
const baseSuccessCallback = (event) => {
  event.preventDefault();
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер

  // const form = document.querySelector('[data-form-callback-request]');
  const formData = new FormData(event.target);
  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // event.target.closest('[data-form-callback-request]').close();

        modals.close(document.querySelector('.modal.is-active').dataset.modal);
        // event.target.closest('[data-form-callback-request]').classList.remove('is-active');
        return response.text();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    // .then((data) => {
    //   document.body.innerHTML = `<pre>${data}</pre>`;
    // })
    // .catch(() => {
    //   form.noValidate = false;
    //   form.reportValidity();
    // });
    .then((data) => {
      console.log('Результат', data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
