console.log('Setze Timeout');

// Setze ein Timeout, das nach 1 Sekunde eine Nachricht ausgibt
setTimeout(function() {
  console.log('Timeout abgelaufen');
}, 1000); // Timeout für 1 Sekunde

// Beginne eine lange laufende Schleife, die den Thread für 3 Sekunden blockiert
const start = Date.now();
let i = 0;

while (Date.now() - start < 3000) { // Blockiere für 3 Sekunden
  i++;
}

console.log('Lange laufende Schleife beendet');
// Der Callback von setTimeout wird erst nach dem Beenden der Schleife aufgerufen
console.log('Start der Berechnung');

// Simuliere eine aufwändige Berechnung, die den Hauptthread blockiert
function intensiveTask() {
  let total = 0;
  for (let i = 0; i < 1e9; i++) { // Eine große Schleife, die einige Sekunden dauert
    total += i;
  }
  console.log('Berechnung abgeschlossen:', total);
}

// Setze eine asynchrone Nachricht, die nach 2 Sekunden angezeigt werden sollte
setTimeout(function() {
  console.log('2 Sekunden sind vergangen (aber das kann verzögert sein)');
}, 2000);

// Starte die blockierende Berechnung
intensiveTask();

console.log('Der Rest des Codes läuft weiter');
const worker = new Worker('worker.js'); // Startet einen neuen Web Worker

worker.postMessage('Starte Berechnung');

worker.onmessage = function(event) {
  console.log('Ergebnis der Berechnung:', event.data);
};
