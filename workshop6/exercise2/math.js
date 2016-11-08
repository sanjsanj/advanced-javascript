// Module to perform math operations on a number
// Will be the "back-end" for the calculator you will build
var MATH = (function () {
    var setInitialValue,
        getTotal,
        privateAdd,
        privateSubtract,
        total = 0;

    setInitialValue = function (x) {
        total = x;
        return this;
    };

    getTotal = function () {
        return total;
    };

    privateAdd = function (x) {
        total = total + x;
        return this
    };

    privateSubtract = function (x) {
        total = total - x;
        return this
    };

    return {
        get: getTotal,
        set: setInitialValue,
        add: privateAdd,
        sub: privateSubtract
    };
})();
