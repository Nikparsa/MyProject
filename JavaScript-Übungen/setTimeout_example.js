function startTimeout() {
    // Eingabewert aus dem Feld holen und in Millisekunden umrechnen
    const duration = parseInt(document.getElementById('timerDuration').value) * 1000; // In Millisekunden umwandeln
    console.log(`Timer gestartet - Nachricht erscheint in ${duration / 1000} Sekunden`);
    
    // Verzögerte Ausführung der Nachricht nach der angegebenen Zeit
    setTimeout(function() {
        console.log(`${duration / 1000} Sekunden sind vergangen!`);
    }, duration);
}
function startCountdown() {
    let duration = parseInt(document.getElementById('timerDuration').value);
    const countdownDisplay = document.getElementById('countdown');
    countdownDisplay.textContent = `Verbleibende Zeit: ${duration} Sekunden`;
    
    const interval = setInterval(function() {
      duration--;
      countdownDisplay.textContent = `Verbleibende Zeit: ${duration} Sekunden`;
  
      if (duration <= 0) {
        clearInterval(interval);
        console.log('Countdown abgeschlossen!');
      }
    }, 1000);
  }
  
  
  

// Starten des Timers beim Klick auf den Button
const startButton = document.getElementById('startTimer');
startButton.addEventListener('click', startTimeout);
startButton.addEventListener('click', startCountdown);