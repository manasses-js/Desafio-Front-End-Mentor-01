var botao = document.querySelector('.botao');
var firstName = form.firstName;
var lastName = form.lastName;
var emailAddress = form.emailAddress;
var password = form.password;

var firstError = document.querySelector('.firstError');
var lastError = document.querySelector('.lastError');
var emailError = document.querySelector('.emailError');
var passError = document.querySelector('.passError');

console.log(firstError)


function validarFormulario() {
    if (firstName.value == "") {
        firstName.classList.remove("input")
        firstName.classList.add("borderError")
        firstError.classList.remove("firstError")
        firstError.classList.add("mensageError")
    } else {
        firstName.classList.remove("borderError")
        firstName.classList.add("input")
        firstError.classList.remove("mensageError")
        firstError.classList.add("firstError")
    }
    
    if (lastName.value == "") {
        lastName.classList.remove("input")
        lastName.classList.add("borderError")
        lastError.classList.remove("lastError")
        lastError.classList.add("mensageError")
    } else {
        lastName.classList.remove("borderError")
        lastName.classList.add("input")
        lastError.classList.remove("mensageError")
        lastError.classList.add("lastError")
    }

    if (emailAddress.value == "") {
        emailAddress.classList.remove("input")
        emailAddress.classList.add("borderError")
        emailError.classList.remove("emailError")
        emailError.classList.add("mensageError")
    } else {
        emailAddress.classList.remove("borderError")
        emailAddress.classList.add("input")
        emailError.classList.remove("mensageError")
        emailError.classList.add("emailError")
    }

    if (password.value == "") {
        password.classList.remove("input")
        password.classList.add("borderError")
        passError.classList.remove("passError")
        passError.classList.add("mensageError")
    } else {
        password.classList.remove("borderError")
        password.classList.add("input")
        passError.classList.remove("mensageError")
        passError.classList.add("passError")
    }

    document.addEventListener('load', validarFormulario)
    
}

botao.addEventListener('click', validarFormulario);
