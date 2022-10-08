// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.targetDate = targetDate;
//     this.daysSpan = document.querySelector(`${selector} [data-value="days"]`);
//     this.hoursSpan = document.querySelector(`${selector} [data-value="hours"]`);
//     this.minsSpan = document.querySelector(`${selector} [data-value="mins"]`);
//     this.secsSpan = document.querySelector(`${selector} [data-value="secs"]`);
//     this.updateTimer();
//   }

//   updateTimer() {
//     setInterval(() => {
//       const currentTime = Date.now();
//       const delta = this.targetDate - currentTime;
//       const { days, hours, minutes, seconds } = this.convert(delta);
//       this.daysSpan.textContent = days;
//       this.hoursSpan.textContent = hours;
//       this.minsSpan.textContent = minutes;
//       this.secsSpan.textContent = seconds;
//     }, 1000);
//   }

//   convert(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
//     const days = Math.floor(ms / day);
//     const hours = Math.floor((ms % day) / hour);
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
//   }
// }

// const timer1 = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jan 1, 2023"),
// });

// const timer2 = new CountdownTimer({
//   selector: "#timer-2",
//   targetDate: new Date("May 9, 2023"),
// });

// const timer3 = new CountdownTimer({
//   selector: "#timer-3",
//   targetDate: new Date("Nov 1, 2022"),
// });
