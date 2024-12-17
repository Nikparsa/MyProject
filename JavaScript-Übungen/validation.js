document.getElementById('myForm').addEventListener('submit', function(event) {
    // Verhindert das Standardverhalten des Formulars (kein direktes Senden)
    event.preventDefault();
  
    // Variable, um den Validierungsstatus zu halten
    let formIsValid = true;
  
    // Eingabewerte holen
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Überprüfen, ob der Benutzername leer ist
    if (!username) {
      document.getElementById('usernameError').style.display = 'inline';
      formIsValid = false;
    } else {
      document.getElementById('usernameError').style.display = 'none';
    }
  
    // Überprüfen, ob das Passwort leer ist
    if (!password) {
      document.getElementById('passwordError').style.display = 'inline';
      formIsValid = false;
    } else {
      document.getElementById('passwordError').style.display = 'none';
    }
  
    // Wenn das Formular gültig ist, könnte es hier gesendet werden
    if (formIsValid) {
      // Hier könnte ein Ajax-Call oder form.submit() stehen
      console.log('Formular ist gültig und kann gesendet werden!');
    }
  });
  