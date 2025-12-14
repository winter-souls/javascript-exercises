const convertToCelsius = function(temp) {
  //celsius = (F (temp) - 32)/1.8
  let celsius = (temp - 32)/1.8;
  //round by 1 decimal place
  let celsiusRounded = Math.round(celsius * 10)/10
  //return celsius
  return celsiusRounded;
};

const convertToFahrenheit = function(temp) {
  //F = C (temp) * 1.8 + 32
  let fahrenheit = (temp * 1.8) + 32;
  //round by one 1 decimal place
  let fahrenheitRounded = Math.round(fahrenheit *10)/10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
