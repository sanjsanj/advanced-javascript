var ProductLister = (function () {
    // Define the variables used by module
    var init,
        callAjax,
        jsonToHTML,
        addHTMLtoDOM,
        filters = document.getElementById('filters'),
        productsList = document.getElementById('products-list'),
        category,
        currentItem,
        dataLength,
        htmlToReturn,
        i;

    // The "init" function, sets up event handlers
    init = function () {
        filters.addEventListener("click", callAjax);
    };

    // Function to run when a category button is clicked
    // Handler is assigned to parent, so we use event delegation!
    callAjax = function (event) {
        event.preventDefault();
        category = event.target.getAttribute("data-category");

        if (category != null) {
            productsList.innerHTML = "";
            productsList.className = "loading";

            $.ajax({
              url: "http://gerardluskin.com/city/service/products/?callback=&category=" + category,
              dataType: "jsonp",
              success: function (data, textStatus, jqXHR) {
                  if (!data.error) {
                      jsonToHTML(data.products);
                      addHTMLtoDOM(htmlToReturn);
                  } else {
                      productsList.className = "";
                      productsList.innerHTML = data.error;
                  };
              },
              error: function (jqXHR, textStatus, err) {
                  productsList.className = "";
                  productsList.innerHTML = err;
              },
              complete: function (jqXHR, textStatus) {
              }
            });
        };
    };

    // Function to convert data returned via ajax to HTML
    jsonToHTML = function (productData) {
        dataLength = productData.length;
        htmlToReturn = "<ul class='products'>";

        for (i = 0; i < dataLength; i += 1) {
            // Copy product object to currentItem (easier to type!)
            currentItem = productData[i];
            htmlToReturn += "<li class='" + currentItem.category + "'>" +
                                "<a href='" + currentItem.url + "'>" + currentItem.name + "</a>" +
                                "<span>Price: " + currentItem.price + "</span>" +
                            "</li>";
        };

        htmlToReturn += "</ul>";
    };

    // Function to add the HTML to the DOM
    addHTMLtoDOM = function (html) {
        productsList.className = "";
        productsList.innerHTML = htmlToReturn;
    };

    // All we need to return is the init function
    return {
        init: init
    };
})();

// Initialise "ProductLister"...
ProductLister.init();
