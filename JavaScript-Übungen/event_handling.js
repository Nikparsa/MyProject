const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
  alert('Button geklickt!');
});
const myInput = document.getElementById('myInput');
myInput.addEventListener('input', function(event) {
  console.log('Benutzereingabe:', event.target.value);
});
myButton.addEventListener('mouseover', function() {
    myButton.style.backgroundColor = 'yellow';
  });
  
  myButton.addEventListener('mouseout', function() {
    myButton.style.backgroundColor = '';
  });
  const myForm = document.getElementById('myForm');
  myForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Verhindert, dass das Formular abgesendet wird
    const name = document.getElementById('name').value;
    alert(`Formular abgesendet mit Name: ${name}`);
  });
  
  