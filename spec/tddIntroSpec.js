describe("Intro to doing TDD in javaScript", function(){
  var calculator = require("../lib/calcEngine");
  it("should add two numbers together", function(){
    expect(calculator.addTwoNumbers(3,2)).toEqual(5);
  })

})
