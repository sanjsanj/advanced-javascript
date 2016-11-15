var ProductLister = (function () {

    // Define the variables used by module
    var init,
        callAjax,
        jsonToHTML,
        addHTMLToDom;

    // The "init" function, sets up event handlers
    init = function () {

    };

    // Function to run when a category button is clicked
    // Handler is assigned to parent, so we use event delegation!
    callAjax = function (event) {

        event.preventDefault();

    };

    // Function to convert data returned via ajax to HTML
    jsonToHTML = function (productData) {

    };

    // Function to add the HTML to the DOM
    addHTMLtoDOM = function (html) {

    };

    // All we need to return is the init function
    return {
        init: init
    };

})();

// Initialise "ProductLister"...
ProductLister.init();


