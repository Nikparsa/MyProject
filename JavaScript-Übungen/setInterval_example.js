let counter = 0;
let intervalId;

const counterDisplay = document.getElementById('counterDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Startet den Zähler und aktualisiert jede Sekunde
startButton.addEventListener('click', function() {
    intervalId = setInterval(function() {
        counter++;
        counterDisplay.textContent = `Zähler: ${counter}`;
    }, 1000);

    startButton.style.display = 'none'; // Versteckt den Start-Button
    stopButton.style.display = 'inline'; // Zeigt den Stop-Button
});

// Stellt den Zähler nach 10 Sekunden oder manuell mit dem Stop-Button ein
function stopCounter() {
    clearInterval(intervalId);
    console.log('Zähler gestoppt.');
    stopButton.style.display = 'none';
}
let countdownValue = 10;
counterDisplay.textContent = `Countdown: ${countdownValue}`;

const countdownId = setInterval(function() {
    countdownValue--;
    counterDisplay.textContent = `Countdown: ${countdownValue}`;

    if (countdownValue <= 0) {
        clearInterval(countdownId);
        console.log('Countdown abgeschlossen!');
    }
}, 1000);


stopButton.addEventListener('click', stopCounter);

// Stoppt den Zähler automatisch nach 10 Sekunden
setTimeout(stopCounter, 10000);
