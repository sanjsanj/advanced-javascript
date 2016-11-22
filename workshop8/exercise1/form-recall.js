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
            // Get the value from field
            var itemValue = event.target.value;
            console.log('DEBUG: storeFieldValue: ' + itemValue);
        }
    };
    
    populateForm = function (event) {
        event.preventDefault();
        console.log('DEBUG: populateForm');
    };

    clearStorage = function (event) {
        event.preventDefault();
        console.log('DEBUG: clearStorage');
    };

    return {
        init: init
    };

})();

FormRecall.init();
