// Function to act as callback
function logItem(item, key, list) {
    console.log('Item is a ' + typeof item);
    console.log(item);
    console.log(key);
    console.log(list);
}

// A simple array of strings
var myArray = ["John", "Paul", "George", "Ringo"];

// A simple object
var myObject = {
    "name": "Joe", 
    "age": 36, 
    "job": "Programmer"
};

// A nodeList collection of DOM nodes (of type "div")
var nativeElements = document.querySelectorAll("div");

// A jQuery object containing DOM nodes (of type "div")
var jqueryElements = $("div");

// pass a collection to _.each()
_.each(myArray, logItem);

// Try passing other types of collections to .each
//_.each(myObject, logItem);
//_.each(nativeElements, logItem);
//_.each(jqueryElements, logItem);
