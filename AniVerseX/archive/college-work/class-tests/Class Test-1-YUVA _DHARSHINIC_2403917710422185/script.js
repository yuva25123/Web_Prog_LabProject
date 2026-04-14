const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const gender = document.getElementsByName('gender');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        // In a real application, you would submit the form data here
        alert('Registration successful!');
        form.reset();
        clearErrors();
    }
});

function validateInputs() {
    let isValid = true;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    let genderValue = '';
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderValue = gender[i].value;
            break;
        }
    }


    // Username validation
    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
        isValid = false;
    } else {
        setSuccess(password);
    }

    // Confirm password validation
    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
        isValid = false;
    } else if (passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, "Passwords don't match");
        isValid = false;
    } else {
        setSuccess(confirmPassword);
    }

    // Gender validation
    if (genderValue === '') {
        setError(gender[0], 'Please select your gender');
        isValid = false;
    } else {
        setSuccess(gender[0]);
    }

    return isValid;
}

function setError(element, message) {
    const inputGroup = element.parentElement.closest('.input-group');
    const errorDisplay = inputGroup.querySelector('.error-message');

    errorDisplay.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement.closest('.input-group');
    const errorDisplay = inputGroup.querySelector('.error-message');

    errorDisplay.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^(([^<>()[\\]\\.,;:\s@\"]+(\.[^<>()[\\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function clearErrors() {
    const errorInputs = document.querySelectorAll('.input-group.error');
    const successInputs = document.querySelectorAll('.input-group.success');

    errorInputs.forEach(input => {
        input.classList.remove('error');
        const errorDisplay = input.querySelector('.error-message');
        errorDisplay.innerText = '';
    });

     successInputs.forEach(input => {
        input.classList.remove('success');
    });
}
