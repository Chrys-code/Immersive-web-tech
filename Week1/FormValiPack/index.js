import validator from 'validator';

const input = document.querySelectorAll('input');
const labels = document.querySelectorAll("label");
const btn = document.querySelector("button");

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if(validator.isEmail(input[0].value) == true ) {
        labels[0].innerText = "Email: Valid";
        labels[0].style.color = "green";
    } else {
        labels[0].style.color = "red";
        labels[0].innerText = "Email: Invalid";
    }

    if(validator.isEmpty(input[1].value) != true && validator.isLength(input[1].value, {min:6, max:16})) {
        labels[1].innerText = "Name: Valid";
        labels[1].style.color = "green";
    } else {
        labels[1].style.color = "red";
        labels[1].innerText = "Name: Must be 6-16 char long";
    }

    if(validator.isEmpty(input[2].value) != true && validator.isLength(input[2].value, {min:6, max:16})) {
        labels[2].innerText = "Username: Valid";
        labels[2].style.color = "green";
    } else {
        labels[2].style.color = "red";
        labels[2].innerText = "Uname: Must be 6-16 char long";
    }


})