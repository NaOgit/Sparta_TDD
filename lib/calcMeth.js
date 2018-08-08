function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1/num2;
}

function powerFunc(number, power) {
  return Math.pow(number,power);
}

function squareFunc(number) {
  return Math.sqrt(number);
}

function bmiMetric(weight, height) {
  return (weight/(Math.pow(height, 2))).toPrecision(3);
}

function bmiImperial(weight, height) {
  return (weight/(Math.pow(height, 2)) * 703).toPrecision(3);
}

function tripFunc(distance, speed, fuelEff, costPerGal) {
  return (distance / speed).toFixed(1);
  return ((distance/fuelEff) * costPerGal).toFixed(2);
}


module.exports = {
  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication,
  division: division,
  powerFunc: powerFunc,
  squareFunc: squareFunc,
  bmiMetric: bmiMetric,
  bmiImperial: bmiImperial,
  tripFunc: tripFunc,
}
