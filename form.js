document.getElementById('btn').addEventListener('click', function () {

    var firstname = document.getElementById('fistname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    document.getElementById("frname-error").textContent = "";
    document.getElementById("lname-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("pass-error").textContent = "";

    if (firstname === "") {
        document.getElementById("frname-error").textContent = "Please enter your first name";
        document.getElementById("fistname").classList.add("error");
        document.getElementById("fistname-icon-error").style.display = "inline-block";
    } else {
        document.getElementById("fistname").classList.remove("error");
        document.getElementById("fistname-icon-error").style.display = "none";
    }

    if (lastname === "") {
        document.getElementById("lname-error").textContent = "Last Name cannot be empty"
        document.getElementById("lastname").classList.add("error");
        document.getElementById("lastname-icon-error").style.display = "inline-block";
    } else {
        document.getElementById("lastname").classList.remove("error");
        document.getElementById("lastname-icon-error").style.display = "none";
    }

    if (email === "") {
        document.getElementById("email-error").textContent = "Looks like this is not an email";
        document.getElementById("email").classList.add("error");
        document.getElementById("email-icon-error").style.display = "inline-block";
    } else {
        document.getElementById("email").classList.remove("error");
        document.getElementById("email-icon-error").style.display = "none";
    }

    if (password === "") {
        document.getElementById("pass-error").textContent = "Passoword cannot be empty";
        document.getElementById("password").classList.add("error");
        document.getElementById("password-icon-error").style.display = "inline-block";
    } else {
        document.getElementById("password").classList.remove("error");
        document.getElementById("password-icon-error").style.display = "none";
    }



});