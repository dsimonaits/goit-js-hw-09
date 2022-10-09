import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.js';
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  delayStep: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
};

const promiseData = { delay: 0, step: 0, amount: 0 };

let position = 0;

refs.form.addEventListener('input', onFormInput);

refs.form.addEventListener('submit', createPromises);

function onFormInput(e) {
  promiseData[e.target.name] = e.target.value;
}

function createPromises(e) {
  e.preventDefault();
  position = 1;
  let { delay, step, amount } = promiseData;
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  for (let i = 1; i < amount; i++) {
    position += 1;
    delay = Number(delay) + Number(step);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
