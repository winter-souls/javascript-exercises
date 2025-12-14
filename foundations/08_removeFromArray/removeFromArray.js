const removeFromArray = function(array, ...values) {
    return array
        //if x is NOT one of the values, include it in the final array
        .filter(x => !values.includes(x)) 
};


// Do not edit below this line
module.exports = removeFromArray;
