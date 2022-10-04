// Seconds digits
var seconds0to9 = document.querySelector("#seconds1");
var seconds10to60 = document.querySelector("#seconds2");
// Minutes digits
var minutes0to9 = document.querySelector("#minutes1");
var minutes10to60 = document.querySelector("#minutes2");
// Buttons
var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var continueButton = document.getElementById('continueButton');

var interval;


function start() {
    // Change button to stop
    startButton.hidden = true;
    stopButton.hidden = false;
    continueButton.hidden = true;

    // Increment counter
    interval = setInterval(() => {
        seconds0to9.textContent++;

        if (seconds0to9.textContent > 9) {
            seconds0to9.textContent = 0;
            seconds10to60.textContent++;
        }
        if (seconds10to60.textContent > 6) {
            seconds10to60.textContent = 0;
            minutes0to9.textContent++;
        }
        if (minutes0to9.textContent > 9) {
            minutes0to9.textContent = 0;
            minutes10to60.textContent++;
        }

        // Funny thing when pass an hour
        if (minutes10to60 > 6) {
            clearInterval(interval);

            seconds0to9.textContent = '?';
            seconds10to60.textContent = 'y';
            minutes0to9.textContent = 'h';
            minutes10to60.textContent = 'w';
        }
    }, 1000);
}

function stop() {
    // Change button to continue
    stopButton.hidden = true;
    continueButton.hidden = false;

    clearInterval(interval);
}

function clearA() {
    clearInterval(interval);

    startButton.hidden = false;
    stopButton.hidden = true;
    continueButton.hidden = true;

    seconds0to9.textContent = '0';
    seconds10to60.textContent = '0';
    minutes0to9.textContent = '0';
    minutes10to60.textContent = '0';
}