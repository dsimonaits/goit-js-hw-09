import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.js';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', createPromises);

function createPromises(e) {
  e.preventDefault();
  const amount = e.target.amount.value;
  const step = Number(e.target.step.value);
  let delay = Number(e.target.delay.value);
  let position = 1;

  const intervalID = setInterval(() => {
    if (position >= amount) {
      clearInterval(intervalID);
    }
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
      })
      .finally(() => {
        formRef.reset();
      });
    position += 1;
    delay += step;
  });
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
