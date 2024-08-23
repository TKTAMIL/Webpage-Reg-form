document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting automatically

    // Fetching form data
    var firstname = document.getElementById('firstname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var email = document.getElementById('email').value.trim();
    var contact = document.getElementById('contact').value.trim();
    var address = document.getElementById('address').value.trim();
    var city = document.getElementById('city').value.trim();

    // Basic validation
    if (firstname === '' || lastname === '' || email === '' || contact === '' || address === '' || city === '') {
        alert('All fields are required!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    if (!validateContact(contact)) {
        alert('Please enter a valid contact number!');
        return;
    }

    // If all validations pass
    alert('Registration complete!');
    document.getElementById('registrationForm').reset(); // Optionally reset the form after submission
});

// Function to validate email using regex
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);  // Test if the email matches the regex pattern
}

// Function to validate contact number (must be exactly 10 digits)
function validateContact(contact) {
    var re = /^\d{10}$/;  // Regex for exactly 10 digits
    return re.test(contact);  // Test if the contact number matches the regex pattern
}