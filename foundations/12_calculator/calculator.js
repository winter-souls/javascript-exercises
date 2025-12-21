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

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let min = 1;
  for (let i = 1; i <= num; i++) {
    min *= i;
  }
  return min;
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
