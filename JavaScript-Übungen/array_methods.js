const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled);  // Ausgabe: [2, 4, 6, 8, 10]
const filtered = numbers.filter(x => x > 2);
console.log(filtered);  // Ausgabe: [3, 4, 5]
const found = numbers.find(x => x > 2);
console.log(found);  // Ausgabe: 3
numbers.forEach(x => console.log(x));
// Ausgabe: 1, 2, 3, 4, 5 (jede Zahl in einer neuen Zeile)
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum);  // Ausgabe: 15
const hasNegative = [-1, 2, 3, 4].some(x => x < 0);
console.log(hasNegative);  // Ausgabe: true
const allPositive = [1, 2, 3, 4].every(x => x > 0);
console.log(allPositive);  // Ausgabe: true
const sorted = [3, 1, 4, 1, 5].sort();
console.log(sorted);  // Ausgabe: [1, 1, 3, 4, 5]
// Verdoppelt jedes Element des Arrays
// Verdoppelt jedes Element des Arrays
const double = numbers.map(x => x * 2);


