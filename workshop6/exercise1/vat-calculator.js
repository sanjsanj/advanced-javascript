// The function to run whenever the VAT rate goes up
// This function is not part of the VatCalc module, but does use
// data stored in it.
function updateVatDisplay(value) {

    // In the real world, this will update element of page
    //var el = document.getElementById('vat-total');
    //el.textContent = 'VAT rate is: ' + value;

    // we will just console.log it for now:
    console.log('VAT rate is: ' + value);

}

// The VatCalculator module
var VatCalculator = (function (d) {
    var rate, vatEvent, raiseVat, calcVat, addVat, getRate, init;

    rate = 20;

    raiseVat = function (amount) {
        rate = rate + amount;
        // Rate has changed, so update value in event object
        vatEvent.detail.rate = rate;
        // Now fire the event...
        d.dispatchEvent(vatEvent);
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

    init = function (vatRate) {
      vatEvent = new CustomEvent("VatRaised", {
          "detail": {
              "rate": vatRate
          }
      });
    };

    return {
        get: getRate,
        add: addVat,
        increase: raiseVat,
        init: init
    };

})(document);

VatCalculator.init();

// When page loads, we run updateVatDisplay manually
var vat = VatCalculator.get();
updateVatDisplay(vat);

// We also "listen" for the VatRaised event, and when
// it is fired, we run the function again, using the
// rate value stored in the event object
document.addEventListener(
    "VatRaised",
    function (event) {
        // get the new rate from detail object
        var newVat = event.detail.rate;
        updateVatDisplay(newVat);
    }
);

// To test... call the increase method
// Each time it is called, the event should fire
VatCalculator.increase(2);
VatCalculator.increase(5);
VatCalculator.increase(10);
