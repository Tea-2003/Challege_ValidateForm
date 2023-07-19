
var firstname = document.getElementById('fistname').value;
var lastname = document.getElementById('lastname').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var submitButton = document.getElementById('btn');


submitButton.addEventListener('btn', function (event) {
    event.preventDefault(); // Prevent form from being submitted by default

    document.getElementById("frname-error").textContent = "";
    document.getElementById("lname-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("pass-error").textContent = "";

    if (firstName === "") {
        document.getElementById("frname-error").textContent = "Please enter your first name.";
        document.getElementById("fistname").classList.add("error");
        document.getElementById("fistname-icon-error").style.display = "inline-block";
    } else {
        document.getElementById("fistname").classList.remove("error");
        document.getElementById("fistname-icon-error").style.display = "none";
    }

    if (lastName === "") {
        document.getElementById("lname-error").textContent = "Last Name cannot be empty";
    }

    if (email === "") {
        document.getElementById("email-error").textContent = "Looks like this is not an email";
    }

    if (password === "") {
        document.getElementById("pass-error").textContent = "Passoword cannot be empty";
    }

    var errorMessages = form.querySelectorAll('.error-message');
    if (errorMessages.length === 0) {
        console.log('Form valid');
    } else {
        console.log('Form invalid. Please check all field');
    }


});