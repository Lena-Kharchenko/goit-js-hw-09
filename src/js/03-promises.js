import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElement = document.querySelector('.form');

// Set event listener submit on form
formElement.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(formElement.delay.value);

  for (let i = 1; i <= formElement.amount.value; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(formElement.step.value);
  }
}

// Create promise
function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      }
      reject(obj);
    }, delay);
  });
}
