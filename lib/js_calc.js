//Declared greeting prompt
// var name = prompt("Please tell me your name!");
// alert(("Hello, ") + (name) + ("! Welcome to myCalculator!"));

function myCalculator(){

  var calculatorOption = prompt("Which calculator will you be using today, (b)asic, (a)dvanced, (i)BMI, or (t)rip?");

  if (calculatorOption == "b") {
    var numb1 = parseFloat(prompt("Enter a number"));
    var operator = prompt("Enter an operator");
    var num1 = parseFloat(prompt("Enter a number"));

    if (operator == "+") {
      Addition();
    }
    if (operator == "-") {
      Subtraction();
    }
    if (operator == "*") {
      Multiplication();
    }
    if (operator == "/") {
      Division();
    }
  }

  if (calculatorOption == "a") {
    var advanceOption = prompt("Which function do you wish to perform, (1)Power, or (2)Square Root?")

    if (advanceOption == 1) {
      number = parseFloat(prompt("Enter your base"));
      power = parseFloat(prompt("Enter your exponent"))
      powerFunc();
    }
    if (advanceOption == 2) {
      number = parseFloat(prompt("Enter number you'd like to take a square root of"));
    }
  }

  if (calculatorOption == "i") {
    var BMIOption = prompt("Which do you prefer, (1)Metrics, or (2)Imperials?");

    if (BMIOption == 1) {
      var weight = parseFloat(prompt("Enter your weight in kilograms"));
      var height = parseFloat(prompt("Enter your height in metres"));

      bmiMetric();
    }
    if (BMIOption == 2) {
      var weight = parseFloat(prompt("Enter your weight in pounds"));
      var height = parseFloat(prompt("Enter your height in inches"));

      bmiImperial();
    }
  }

  if (calculatorOption == "t") {
    var distance = parseFloat(prompt("Enter distance in miles"));
    var speed = parseFloat(prompt("Enter average speed"));
    var fuelEff = parseFloat(prompt("Enter fuel efficiency in MPG"));
    var costPerGal = parseFloat(prompt("Enter cost per gallon"));

    if (speed < 60) {
      tripFunc();
    }
    else {
      return "Error";
    }
  }

}
myCalculator();
