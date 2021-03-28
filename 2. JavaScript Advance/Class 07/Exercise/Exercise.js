// ## **JavaScript Timer**
// Create Timer in JavaScript that will start counting time after the start button is pressed and the time will show on the UI.
// 1. The timer should start counting when user presses the start button. 
// 2. The timer should stop counting when the user presses the stop button.
// 3. The timer should be reseted when the user presses the reset button.
// The UI needs to be updated on every change of the state of the timer.


let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let timer = document.getElementById("timer");


let stopWatch = {
    time: 0,
    intValId: null,

    start: function () {
        this.intValId = setInterval(() => {
            this.time++;
            timer.innerHTML = `${this.time}`
        }, 1000);
    },
    stop: function () {
        clearInterval(this.intValId);
        this.intValId = null;
    },
    reset: function () {
        if (this.intValId) {
            clearInterval(this.intValId);
            this.intValId = null;
            this.time = 0;
        }
        timer.innerHTML = `${this.time = 0}`;
    }
}


startBtn.addEventListener("click", function(){
    stopWatch.start();
})

stopBtn.addEventListener("click", function(){
    stopWatch.stop();
})

resetBtn.addEventListener("click", function(){
    stopWatch.reset();
})