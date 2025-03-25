document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Here you can handle the registration logic, e.g., send data to a server
    console.log('Registered:', { name, email, phone });

    // Redirect to the game page after registration
    window.location.href = 'index.html';
});