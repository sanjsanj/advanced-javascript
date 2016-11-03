// Part 1
var result,
    Calculator = (function () {

        var total = 0,
            privateAdd,
            privateSubstract,
            privateIncrement,
            privateDecrement,
            displayResult,
            returnObject;

        privateAdd = function (x) {
            // "total" is not part of the returned object
            // so we don't prefix with "this"
            total = total + x;
            // When function runs, "this" refers to the object
            // that the module returned... so we return it from
            // the function which makes chaining possible
            return this;
        };
        
        privateSubstract = function (x) {
            total = total - x;
            return this;
        };
        
        privateIncrement = function () {
            total = total + 1;
            return this;
        };
        
        privateDecrement = function () {
            total = total - 1;
            return this;
        };
        
        displayResult = function () {
            return total;
        };

        returnObject = {
            add: privateAdd,
            subtract: privateSubstract,
            addOne: privateIncrement,
            subOne: privateDecrement,
            display: displayResult
        };
        
        return returnObject;

    })();

result = Calculator.add(25).addOne().add(16).display();
console.log(result); // 42

// Part 2
var result,
    Calculator = (function () {

        var privateAdd,
            privateSubstract,
            privateIncrement,
            privateDecrement,
            displayResult,
            config = {
                total: 0
            },
            returnObject;

        setConfig = function (settings) {
            // make sure we have a value to work with
            if (settings.total !== 'undefined') {
                // Copy value to config object
                config.total = settings.total;
            }
            return this;
        };
        
        privateAdd = function (x) {
            config.total = config.total + x;
            return this;
        };
        
        privateSubstract = function (x) {
            config.total = config.total - x;
            return this;
        };
        
        privateIncrement = function () {
            config.total = config.total + 1;
            return this;
        };
        
        privateDecrement = function () {
            config.total = config.total - 1;
            return this;
        };
        
        displayResult = function () {
            return config.total;
        };

        returnObject = {
            add: privateAdd,
            subtract: privateSubstract,
            addOne: privateIncrement,
            subOne: privateDecrement,
            display: displayResult,
            setConfig: setConfig
        };
        
        return returnObject;

    })();

// No custom config, so total will default to 0
result = Calculator.addOne().display();
console.log(result); // 1

// With custom config
var myConfig = {
    total: 1
};
Calculator.setConfig(myConfig);

result = Calculator.addOne().display();
console.log(result); // 2
