/* Local Storage exercise */
var FormRecall = (function () {

    var init,
        storeFieldValue,
        populateForm,
        clearStorage,
        form = document.getElementById('adduser'),
        clearButton = document.getElementById('clear-button'),
        restoreButton = document.getElementById('restore-button'),
        nameInput = document.getElementById("input-name"),
        emailInput = document.getElementById("input-email");

    init = function () {
        form.addEventListener("keyup", storeFieldValue);
        restoreButton.addEventListener("click", populateForm);
        clearButton.addEventListener("click", clearStorage);
    };

    storeFieldValue = function (event) {
        // Get the "type" of node from event.target
        var typeOfnode = event.target.nodeName;
        // Only act if type is "INPUT"
        if(typeOfnode === "INPUT") {
            // Get the "name" attribute from field
            var itemName = event.target.getAttribute("name"); // Get the value
            var itemValue = event.target.value;
            // Store "value" under "key" window.localStorage.setItem(itemName, itemValue);
            window.localStorage.setItem(itemName, itemValue);
        }
    };

    populateForm = function (event) {
        event.preventDefault();
        var storedName = window.localStorage.getItem("userName"),
            storedEmail = window.localStorage.getItem("userEmail");

        if(storedName !== null) {
          nameInput.value = storedName;
        };

        if(storedEmail !== null) {
          emailInput.value = storedEmail;
        };
    };

    clearStorage = function (event) {
        event.preventDefault();
        window.localStorage.clear();
    };

    return {
        init: init
    };
})();

FormRecall.init();
