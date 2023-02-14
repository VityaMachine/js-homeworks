const refs = {
  display: document.querySelector(".stopwatch-display"),
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]"),
  resetBtn: document.querySelector("button[data-action=reset]"),
  overlay: document.querySelector(".container-stopwatch"),
};

const displayRefs = {
  hour: refs.display.children[0],
  minute: refs.display.children[1],
  second: refs.display.children[2],
};

refs.startBtn.addEventListener("click", startTimer);
refs.stopBtn.addEventListener("click", stopTimer);
refs.resetBtn.addEventListener("click", resetTimer);

let second = 0,
  minute = 0,
  hour = 0,
  interval;

function startTimer() {
  refs.overlay.classList.remove("black");
  refs.overlay.classList.remove("silver");
  refs.overlay.classList.remove("red");
  refs.overlay.classList.add("green");

  clearInterval(interval);
  interval = setInterval(() => {
    second++;

    if (second <= 9) {
      displayRefs.second.innerText = "0" + second;
    }

    if (second > 9 && second <= 59) {
      displayRefs.second.innerText = second;
    }

    if (second > 59) {
      second = 0;
      minute++;
      displayRefs.second.innerText = "00";

      if (minute <= 9) {
        displayRefs.minute.innerText = "0" + minute;
      }

      if (minute > 9 && minute <= 59) {
        displayRefs.minute.innerText = minute;
      }

      if (minute > 59) {
        minute = 0;
        hour++;
        displayRefs.minute.innerText = "00";

        if (minute <= 9) {
          displayRefs.hour.innerText = "0" + hour;
        }

        if (hour > 9 && hour <= 59) {
          displayRefs.hour.innerText = hour;
        }

        if (hour > 23) {
          displayRefs.second.innerText = 59;
          displayRefs.minute.innerText = 59;
          displayRefs.hour.innerText = 23;

          stopTimer();
        }
      }
    }
  }, 1000);
}

function stopTimer() {
  refs.overlay.classList.remove("black");
  refs.overlay.classList.remove("silver");
  refs.overlay.classList.remove("green");
  refs.overlay.classList.add("red");

  refs.overlay.classList.remove("black");
  clearInterval(interval);
}

function resetTimer() {
  refs.overlay.classList.remove("black");
  refs.overlay.classList.remove("green");
  refs.overlay.classList.remove("red");
  refs.overlay.classList.add("silver");

  clearInterval(interval);
  second = 0;
  minute = 0;
  hour = 0;

  displayRefs.second.innerText = "00";
  displayRefs.minute.innerText = "00";
  displayRefs.hour.innerText = "00";
}
