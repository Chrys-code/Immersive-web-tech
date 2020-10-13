import * as getModule from "./getModule.js";

const output = document.querySelectorAll('span');
const yearOfBirth = 1997;
output[0].innerText = getModule.getAge(yearOfBirth);
output[1].innerText = getModule.getYear(yearOfBirth);