import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.js';

const options = {
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
};

const fp = flatpickr('#datetime-picker', options);

const btnStart = document.querySelector('[data-start]');

btnStart.disabled = true;

btnStart.addEventListener('click', startTimer);

function startTimer() {
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
    setInterval(() => {
      const currentTime = Date.now();
      const delta = this.targetDate - currentTime;
      const { days, hours, minutes, seconds } = this.convertMs(delta);
      this.daysSpan.textContent = this.addLeadingZero(days);
      this.hoursSpan.textContent = this.addLeadingZero(hours);
      this.minsSpan.textContent = this.addLeadingZero(minutes);
      this.secsSpan.textContent = this.addLeadingZero(seconds);
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
