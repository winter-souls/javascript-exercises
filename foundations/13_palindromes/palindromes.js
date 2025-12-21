const palindromes = function (string) {
    // Constant that holds all letters and numbers
    let alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

    //Clean up the string
    const cleanedString = string
    .toLowerCase() //make all letters lowercase
    .split('') //split all characters into an array
    .filter((character) => alphanumerical.includes(character)) //filter array to only include characters/numbers
    .join(''); //join array back into a string

    //Reverse the cleaned up string
    const reversedString = cleanedString.split('').reverse().join('');

    //Compare reversed string to original string
    return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
