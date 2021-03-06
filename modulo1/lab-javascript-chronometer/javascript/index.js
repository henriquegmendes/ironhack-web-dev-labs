/* eslint-disable prefer-destructuring */
const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');
const splits = document.getElementById('splits');

let intervalId;

function printTime() {
  intervalId = setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const miliseconds = chronometer.twoDigitsNumber(chronometer.getMiliseconds());

  milDec.innerText = miliseconds[0];
  milUni.innerText = miliseconds[1];
}

function printSplit() {
  const split = chronometer.splitClick();

  const splitLi = document.createElement('li');
  splitLi.innerText = split;

  splits.appendChild(splitLi);
}

function clearChronometerAndSplits() {
  minDec.innerText = '0';
  minUni.innerText = '0';
  secDec.innerText = '0';
  secUni.innerText = '0';
  milDec.innerText = '0';
  milUni.innerText = '0';
  splits.innerHTML = '';
}

function setStopBtn(button) {
  chronometer.stopClick();
  clearInterval(intervalId);

  button.innerText = 'START';
  button.setAttribute('class', 'btn start');

  btnRight.innerText = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn(button) {
  chronometer.startClick();
  printTime();

  button.innerText = 'STOP';
  button.setAttribute('class', 'btn stop');

  btnRight.innerText = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
}

function setResetBtn() {
  chronometer.resetClick();
  clearChronometerAndSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', (event) => {
  const btn = event.target;
  const classAttributes = btn.getAttribute('class');

  if (classAttributes.includes('start')) {
    setStartBtn(btn);
  }

  if (classAttributes.includes('stop')) {
    setStopBtn(btn);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', (event) => {
  const btn = event.target;
  const classAttributes = btn.getAttribute('class');

  if (classAttributes.includes('split')) {
    setSplitBtn();
  }

  if (classAttributes.includes('reset')) {
    setResetBtn();
  }
});
