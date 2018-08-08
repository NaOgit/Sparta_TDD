//Function
//Declared Basic calculator function
function myBasicCalculator(number1, number2, operator) {
  //User input parameters
  number1 = parseFloat(prompt("Enter a number"));
  operator = prompt("Enter an operator");
  number2 = parseFloat(prompt("Enter a number"));
  //Switch operators
  switch (operator) {
    case "+":
      //Return sum of
      alert(("The answer is ") + (number1 + number2) + ("."));
      break;
    case "-":
      //Return the subtracted
      alert(("The answer is ") + (number1 - number2) + ("."));
      break;
    case "*":
      //Return product of
      alert(("The answer is ") + (number1 * number2) + ("."));
      break;
    case "/":
      //Return the divided
      alert(("The answer is ") + (number1 / number2) + ("."));
      break;
    default:
      //If unexpected values are entered
      alert("Please enter relevant values.");
  }
}

module.exports = {
  addition: myBasicCalculator
}
