describe("Calculator tester", function(){
  var calculator = require("../lib/calcMeth.js");

  it("should add two numbers together", function(){
    expect(calculator.addition(3,2)).toEqual(5);
  });

  it("should subtact one from the other", function(){
    expect(calculator.subtraction(7,3)).toEqual(4);
  });

  it("should multiply numbers together", function(){
    expect(calculator.multiplication(4,5)).toEqual(20);
  });

  it("should divide one with the other", function(){
    expect(calculator.division(10,2)).toEqual(5);
  });

  it("should power number by the exponent", function(){
    expect(calculator.powerFunc(3,2)).toEqual(9);
  });

  it("should take a square root of number", function(){
    expect(calculator.squareFunc(16)).toEqual(4);
  });

  it("should calculate BMI using metrics system", function(){
    expect(calculator.bmiMetric(70, 1.75)).toEqual('22.9');
  });

  it("should calculate BMI using Imperial system", function(){
    expect(calculator.bmiImperial(140, 68)).toEqual('21.3');
  });

  it("should calculate BMI using Imperial system", function(){
    expect(calculator.tripFunc(140, 55, 53, 4)).toEqual('2.5', '10.57');
  });



})
