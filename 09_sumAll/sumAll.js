const sumAll = function(min, max) {
    //if min OR max is < 0, ERROR
    if (min < 0 || max < 0) {return "ERROR";}
    //if min OR max are not a number, ERROR
    if (!Number.isInteger(min) || !Number.isInteger(max)) {return "ERROR";}
    //if min > max, create a temp variable that effectively swaps their places
    if (min > max) {
        [min, max] = [max, min];
    }

    let sum = 0;
    for (i = min; i <= max; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
