let counter = 0;
let timerID = 0;
const counterELement = document.querySelector('#counter');

// start
const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
    timerID = setInterval(function () {
        counter++;
        counterELement.innerText = counter;
    }, 1000);
    console.log('timerID', timerID);
}

// stop
const btnStop = document.querySelector('#stop');
btnStop.onclick = function () {
    clearInterval(timerID);
}

// reset
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
    counter = 0;
    counterELement.innerText = counter;
}