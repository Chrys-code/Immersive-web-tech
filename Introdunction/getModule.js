function getYear(yearOfBirth) {
    // Create a date object
    const d = new Date();
    // Get the current year
    const y = d.getFullYear();
    // Up to you to do... calculate the age
    var timeDiffAge = Math.abs(y - yearOfBirth);
    // Up to you to do... return the age
    return y - timeDiffAge
};
function getAge(yearOfBirth) {
    // Create a date object
    const d = new Date();

    // Get the current year
    const y = d.getFullYear();

    // Up to you to do... calculate the age
    return y - yearOfBirth
};
export {getYear, getAge};