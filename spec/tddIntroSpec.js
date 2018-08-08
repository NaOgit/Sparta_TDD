describe("Intro to doing TDD in javaScript", function(){
  var calculator = require("../lib/calcMeth");

  it("should add two numbers together", function(){
    expect(calculator.Addition(3,2)).toEqual(5);
  })

})
