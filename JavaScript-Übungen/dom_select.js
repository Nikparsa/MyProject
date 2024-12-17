const title = document.getElementById('title');
title.textContent = 'Neuer Titel';
const paragraphs = document.getElementsByClassName('text');
console.log(paragraphs[0].textContent); // Ausgabe des Textinhalts des ersten Absatzes
const listItems = document.getElementsByTagName('li');
console.log(listItems.length); // Gibt die Anzahl der li-Elemente aus
const firstParagraph = document.querySelector('.text');
firstParagraph.style.color = 'blue';  // Ändert die Textfarbe des ersten Absatzes

const allListItems = document.querySelectorAll('.list-item');
allListItems.forEach(item => item.style.fontWeight = 'bold');  // Setzt den Text in allen Listenelementen fett
const newElement = document.createElement('p');
newElement.textContent = 'Dies ist ein neu hinzugefügter Absatz.';
document.body.appendChild(newElement);
// Selektiert das h1-Element mit der ID "title"
const title = document.getElementById('title');
const button = document.getElementById('clickMe');
button.setAttribute('disabled', 'true');  // Setzt das Attribut "disabled" auf den Button
button.addEventListener('click', () => {
    alert('Button wurde geklickt!');
});
