document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Verhindert das Standardverhalten des Formulars (Seiten-Neuladen)
        
        const username = form.username.value;
        const password = form.password.value;
        
        // Ausgabe der Formulardaten im <p>-Tag
        document.getElementById('output').textContent = `Username: ${username}, Password: ${password}`;
    });
});
