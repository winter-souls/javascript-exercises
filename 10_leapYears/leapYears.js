const leapYears = function(givenYear) {
    //these const's are stored INSIDE the variable
    //and are used to check if the givenYear parameter meets these conditions
    const isDivisibleByFour = givenYear % 4 === 0;
    const isCentury = givenYear % 100 === 0;
    const isDivisibleByFourHundred = givenYear % 400 === 0;

    if (
        isDivisibleByFour && //is divisible by four AND
        //is NOT a century OR the number is divisible by 400
        (!isCentury || isDivisibleByFourHundred)
    ) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
