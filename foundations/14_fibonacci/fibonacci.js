const fibonacci = function(requestedNumber) {
    // Create an array of the fibonacci sequence
    let fibonacci = [0, 1];
    let count;

    // Check if requested number is an int; convert it to one if not
    if (typeof requestedNumber !== 'number') {
        count = parseInt(requestedNumber);
    } else {
        count = requestedNumber;
    }

    // Check if requested number is a 0 or negative
    if (count < 0) return "Can't do negatives, sorry!";
    if (count == 0) return 0;

    // Loop through array, adding numbers in the sequence
    for (let i = 2; i <= count; i++) {
        fibonacci[i] = fibonacci[i -1] + fibonacci[i-2];
    }

    // Find the user-requested position in that array
    return fibonacci[count];
};

// Do not edit below this line
module.exports = fibonacci;
