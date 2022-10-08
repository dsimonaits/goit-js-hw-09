const refs = {
  body: document.body,
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

refs.btnStop.disabled = true;

const randomBackgroundColor = {
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },
  DELLAY: 1000,
  intervalID: null,
  start() {
    refs.btnStart.addEventListener('click', () => {
      refs.btnStart.disabled = true;
      refs.btnStop.disabled = false;
      refs.body.style.backgroundColor = this.getRandomHexColor();

      this.intervalID = setInterval(() => {
        refs.body.style.backgroundColor = this.getRandomHexColor();
      }, this.DELLAY);
    });

    refs.btnStop.addEventListener('click', () => {
      this.stop();
    });
  },

  stop() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    clearInterval(this.intervalID);
  },
};

randomBackgroundColor.start();
