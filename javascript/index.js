const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  minDec.innerHTML = minutes;
  minUni.innerHTML = minutes;
}

function printSeconds(seconds) {
  secDec.innerHTML = seconds;
    secUni.innerHTML = seconds;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML == 'START') {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();

  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
 
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML == 'RESET') {
    chronometer.resetClick();
    clearSplits();
  } else {
    chronometer.splitClick();
  }
});
