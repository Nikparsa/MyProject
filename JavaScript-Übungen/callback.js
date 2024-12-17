// Diese Funktion nimmt einen Namen und begrüßt die Person
function greet(name) {
    console.log("greet()")
    console.log(`Hallo, ${name}! Willkommen.`);
}

// Diese Funktion akzeptiert eine Callback-Funktion und führt sie aus
function processUserInput(callback) {
    console.log("processUserInput()")
    const userName = 'Max';  // Simulierter Benutzername
    callback(userName);      // Übergibt den Namen an die Callback-Funktion
}

// Aufruf von processUserInput und Übergabe von greet als Callback
processUserInput(greet);
function calculateSum(num1, num2, callback) {
    const sum = num1 + num2;  // Berechnung der Summe
    callback(sum);  // Aufruf der Callback-Funktion mit dem Ergebnis
  }
  
  // Diese Funktion gibt das Ergebnis der Berechnung in der Konsole aus
  function displayResult(result) {
    console.log(`Das Ergebnis der Berechnung ist: ${result}`);
  }

  function displayDemo(result){
    // DOM Manipulation zB innerHTML = result;
    result = result + 1;
  }
  
  // Aufruf von calculateSum mit displayResult als Callback
  calculateSum(10, 15, displayResult);
  calculateSum(10, 15, displayDemo);
  displayResult("test");







let countdownValue = 10;
counterDisplay.textContent = `Countdown: ${countdownValue}`;


function myInterval() {
    countdownValue--;
    counterDisplay.textContent = `Countdown: ${countdownValue}`;

    if (countdownValue <= 0) {
        clearInterval(countdownId);
        console.log('Countdown abgeschlossen!');
    }
}

const countdownId = setInterval(myInterval, 1000);
