import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.js';

const btnStart = document.querySelector('[data-start]');
const timerFieldRef = document.querySelectorAll('.field');
const dateInputRef = document.querySelector('#datetime-picker');
btnStart.disabled = true;

for (let field of timerFieldRef) {
  field.parentElement.style.fontSize = '15px';
  field.parentElement.style.display = 'flex';
  field.parentElement.style.justifyContent = 'center';
  field.parentElement.style.marginTop = '20px';
  field.parentElement.style.gap = '20px';

  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
  field.firstElementChild.style.fontSize = '40px';
  field.lastElementChild.style.textTransform = 'uppercase';
}

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (this.selectedDates[0] > new Date()) {
      btnStart.disabled = false;
    } else {
      btnStart.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
});

btnStart.addEventListener('click', startTimer);

function startTimer() {
  dateInputRef.disabled = true;
  btnStart.disabled = true;
  btnStart.style.touchAction = 'none';
  new CountdownTimer({
    selector: '.timer',
    targetDate: fp.selectedDates[0],
  });
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.daysSpan = document.querySelector(`${selector} [data-days]`);
    this.hoursSpan = document.querySelector(`${selector} [data-hours]`);
    this.minsSpan = document.querySelector(`${selector} [data-minutes]`);
    this.secsSpan = document.querySelector(`${selector} [data-seconds]`);
    this.updateTimer();
  }

  updateTimer() {
    const timerId = setInterval(() => {
      const currentTime = Date.now();
      const delta = this.targetDate - currentTime;
      const { days, hours, minutes, seconds } = this.convertMs(delta);
      this.daysSpan.textContent = this.addLeadingZero(days);
      this.hoursSpan.textContent = this.addLeadingZero(hours);
      this.minsSpan.textContent = this.addLeadingZero(minutes);
      this.secsSpan.textContent = this.addLeadingZero(seconds);

      if (
        this.daysSpan.textContent === '00' &&
        this.hoursSpan.textContent === '00' &&
        this.minsSpan.textContent === '00' &&
        this.secsSpan.textContent === '00'
      ) {
        clearInterval(timerId);
        dateInputRef.disabled = false;
        btnStart.style.touchAction = 'auto';
        Notiflix.Notify.success('The date has come!');
      }
    }, 1000);
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}
