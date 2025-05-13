const repeatString = function(word, times) {
    if (times < 0) return "ERROR"; //throws an error if times is 0
    let string = ""; //establishes empty string
    for (let i = 0; i < times; i++ ) {
    //i is 0; as long as i < times, add one i 
        string += word;
        //# of i's = # of words inserted into the string variable
    }
    return string; //return the new string with repeated words

};

// Do not edit below this line
module.exports = repeatString;
