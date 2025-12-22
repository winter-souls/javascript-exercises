const getTheTitles = function(array) {
    // Use map method to iterate over array items
    // Map method performs a function using each item as its argument ("book")
    // The function gets each book's title and returns it
    return array.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
