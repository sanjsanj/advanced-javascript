var VatCalculator = (function() { 

    var rate, raiseVat, calcVat, addVat, getRate; 

    rate = 20;
    
    raiseVat = function (amount) {
        rate = rate + amount;
    };
    
    calcVat = function (nett) {
        return (rate / 100) * nett;
    };
    
    addVat = function (num) {
        return num + calcVat(num);
    };
    
    getRate = function () {
        return rate;
    };
    
    return {
        get: getRate,
        add: addVat,
        increase: raiseVat
    }; 
})();
