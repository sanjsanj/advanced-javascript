/*
 * A simple calculator, built upon the
 * revealing module pattern
 */
var Calculator = (function () {

    var addNumbers, 
        multiplyNumbers, 
        divideNumbers,
        returnObject;

    addNumbers = function (a, b) {
        return a + b;
    };

    multiplyNumbers = function (a, b) {
        return a * b;
    };

    divideNumbers = function (a, b) {
        return a / b;
    };

    returnObject = {
        add: addNumbers,
        multiply: multiplyNumbers,
        divide: divideNumbers
    };
    
    return returnObject;

}());

// Using the module
console.log(Calculator.add(7, 8)); // result = 15
console.log(Calculator.multiply(3, 8)); // result = 24
