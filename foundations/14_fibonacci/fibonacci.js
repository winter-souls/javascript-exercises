const fibonacci = function(requestedNumber) {
    // Create an array of the fibonacci sequence
    let fibonacci = [0, 1];

    // Loop through array, adding numbers in the sequence
    for (let i = 2; i <= requestedNumber; i++) {
        fibonacci[i] = fibonacci[i -1] + fibonacci[i-2];
    }
    // Find the user-requested position in that array
    return fibonacci[requestedNumber];
};

// Do not edit below this line
module.exports = fibonacci;
