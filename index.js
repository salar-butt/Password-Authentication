var name = document.getElementById('name');
var contact = document.getElementById('contact');
var email = document.getElementById('email');
var passwordInput = document.getElementById('password');
var button = document.getElementById('button');
var icon = document.getElementById('icon');

icon.addEventListener('click', () => {
    // Toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    // Update the eye icon slashed based on the password input type
    icon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});

function validatePassword() {
    const password = passwordInput.value;

    // Define the regular expression pattern for the password
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,15}$/;

    // Test if the password matches the pattern
    if (password.match(passwordPattern)) {
        document.getElementById('error').textContent = 'Password Entered Successfully';
        return true;
    } else {
        document.getElementById('error').textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one special character (@#$%^&+=!), and be between 8 to 13 characters long.';
        return false;
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    if (validatePassword()) {
        // Password is valid, you can submit the form here
        alert('Form submitted successfully!');
    } else {
        passwordInput.style.outlineColor = "red";
        passwordInput.focus();
    }
}
