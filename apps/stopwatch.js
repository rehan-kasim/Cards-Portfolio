const time = document.getElementById('time');
const start = document.getElementById('start');
const Stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let swTimer = null;
let totaltime = 0;

function showStopwatch() {
    const mins = Math.floor(totaltime/60000).toString().padStart(2,'0');
    const secs = Math.floor((totaltime%60000) / 1000).toString().padStart(2,'0');
    const milsecs = Math.floor((totaltime%1000) / 10).toString().padStart(2,'0');
    time.textContent = `${mins}:${secs}.${milsecs}`;
}

start.onclick = function () {
    if (swTimer) return;
    swTimer = setInterval(() => {
        totaltime += 10
        showStopwatch()
    }, 10);
};

Stop.onclick = function() {
    clearInterval(swTimer);
    swTimer = null;
};

reset.onclick = function () {
    clearInterval(swTimer);
    swTimer = null;
    totaltime = 0;
    showStopwatch();
}