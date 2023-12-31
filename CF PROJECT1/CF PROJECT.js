function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;

    // You can perform additional validation here if needed

    const userData = { name, address, email, contact };

    // Send the data to the server (backend) using AJAX, fetch API, etc.
    // Example using fetch:
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, display a success message to the user
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally, display an error message to the user
    });
}
