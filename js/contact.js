function validateName() {
    const name = document.getElementById("name").value;
    const errorName = document.getElementById("errorName");
    
    if (name.trim() === "") {
        errorName.hidden = false;
    } else {
        errorName.hidden = true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const errorEmail = document.getElementById("errorEmail");
    const errorFormatEmail = document.getElementById("errorFormatEmail");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.trim() === "") {
        errorEmail.hidden = false;
        errorFormatEmail.hidden = true;
    } else if (!emailRegex.test(email)) {
        errorEmail.hidden = true;
        errorFormatEmail.hidden = false;
    } else {
        errorEmail.hidden = true;
        errorFormatEmail.hidden = true;
    }
}

function validatePhone() {
    const phone = document.getElementById("phone").value;
    const errorPhone = document.getElementById("errorPhone");
    
    if (phone.trim() === "") {
        errorPhone.hidden = false;
    } else {
        errorPhone.hidden = true;
    }
}

function validateMessage() {
    const message = document.getElementById("message").value;
    const errorMessageUser = document.getElementById("errorMessageUser");
    
    if (message.trim().length < 5) {
        errorMessageUser.hidden = false;
    } else {
        errorMessageUser.hidden = true;
    }
}
