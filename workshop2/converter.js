function convert(rates) {

    var currency,
        originalAmountValue,
        convertedCurrency,
        currencyChoice = document.getElementById("converter-currency"),
        converterInput = document.getElementById("converter-input"),
        originalAmount = document.getElementById("original-amount"),
        resultAmount = document.getElementById("result-amount");

    originalAmountValue = converterInput.value;
    currency = currencyChoice.value;

    if (currency === "eur") {
        convertedCurrency = originalAmountValue * rates.eur;
    } else if (currency === "usd") {
        convertedCurrency = originalAmountValue * rates.usd;
    } else if (currency === "yen") {
        convertedCurrency = originalAmountValue * rates.yen;
    }

    originalAmount.textContent = originalAmountValue;
    resultAmount.textContent = convertedCurrency + " " + currency;

}

var conversionRates = {
  "eur": 1.27,
  "usd": 1.47,
  "yen": 155.62
}

var button = document.getElementById("converter-action");

button.addEventListener(
    "click",
    function (event) {
        event.stopPropagation();
        convert(conversionRates);
    }
);
