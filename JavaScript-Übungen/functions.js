
import { multiplyNumbers } from './mathFunctions.js';
function sayHello() {
    console.log("Hallo Welt");
}

sayHello();  // Aufruf der Funktion
function addNumbers(a, b) {
    return a + b;
}

const sum = addNumbers(5, 3);
console.log("Die Summe ist: " + sum);


const product = multiplyNumbers(4, 5);
console.log("Das Produkt ist: " + product);
