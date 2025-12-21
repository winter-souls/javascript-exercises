const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(array) {
	return array.reduce( (total, value) => {
    return total + value;
  }, 0);
};

const multiply = function(array) {
  return array.reduce( (product, value) => {
    return product *= value;
  })
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
