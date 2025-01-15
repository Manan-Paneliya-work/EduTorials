// Google Sign-in Placeholder
function googleSignIn() {
    alert("Google Sign-in functionality is a placeholder. Integrate Google API here.");
}

// Form Validation
function validateForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;
    const termsAccepted = document.getElementById("terms").checked;

    // Password Confirmation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Email Validation (Basic)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Terms & Conditions Check
    if (!termsAccepted) {
        alert("You must accept the Terms and Conditions.");
        return false;
    }

    // CAPTCHA Validation
    if (grecaptcha.getResponse() === "") {
        alert("Please verify you are not a robot.");
        return false;
    }

    // All validation passed
    alert("Registration successful!");
    return true; // Allow form submission
}
