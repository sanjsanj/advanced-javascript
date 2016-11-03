// A "template" for the module or revealing module pattern
// Copy this chunk code and use it as a foundation for your own modules
// ... obviously, you should change the name of the variable to something more appropriate ;)
var Calculator = (function () {

    var myAdd, myMultiply, myDivide;

    myAdd = function (num1, num2) {
      return num1 + num2;
    };

    myMultiply = function (num1, num2) {
      return num1 * num2;
    };

    myDivide = function (num1, num2) {
      return num1 / num2;
    };

    return {
      add: myAdd,
      multiply: myMultiply,
      divide: myDivide
    };
})();

var result1 = Calculator.add(7, 8); console.log(result1 + " " + (result1 == 15)); // result = 15
var result2 = Calculator.multiply(3, 8); console.log(result2 + " " + (result2 == 24)); // result = 24
var result3 = Calculator.divide(4, 2); console.log(result3 + " " + (result3 == 2)); // result = 2

var calc = (function () {

  var config, add, subtract, increment, decrement, getTotal, setTotal;

    add = function (number) {
      config.total += number;
      return this;
    };

    subtract = function (number) {
      config.total -= number;
      return this;
    };

    increment = function () {
      config.total += 1;
      return this;
    };

    decrement = function () {
      config.total -= 1;
      return this;
    };

    getTotal = function () {
      return config.total;
    };

    setTotal = function (num) {
      config.total = num;
    };

    config = {
      total: 0
    };

    setConfig = function (obj) {
      config.total = obj.total;
    };

    return {
      add: add,
      subtract: subtract,
      increment: increment,
      decrement: decrement,
      getTotal: getTotal,
      setTotal: setTotal,
      setConfig: setConfig
    };
  })();

// Chain some methods
result4 = calc.increment().add(10).getTotal();
console.log(result4 + " " + (result4 == 11)); // 11
// reset total
calc.setTotal(0);
// Chain some methods
result5 = calc.add(7).subtract(3).getTotal();
console.log(result5 + " " + (result5 == 4)); // 4
// reset total
calc.setTotal(0);
// Chain some methods
result6 = calc.increment().decrement().getTotal();
console.log(result6 + " " + (result6 == 0)); // 0

var myConfig = {total: 10};
calc.setConfig(myConfig);
var result7 = calc.getTotal();
console.log(result7 + " " + (result7 == 10)); // 10

//
// myShoppingList
//

var myShoppingList = (function () {
  var privateAdd, privateCount, privateArray = [], privateGetList;

  privateAdd = function (item) {
    privateArray.push(item);
    return this;
  };

  privateCount = function () {
    return privateArray.length;
  };

  privateGetList = function () {
    return privateArray;
  };

  return {
    add: privateAdd,
    count: privateCount,
    getList: privateGetList
  };
})();

var itemsAdded = myShoppingList.add("apple").add("banana").count();
console.log(itemsAdded + " " + (itemsAdded == 2)); // 2 (i.e. the value returned by "count");
var myList = myShoppingList.getList();
console.log(myList); // ["apple", "banana"];
