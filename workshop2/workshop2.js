// <ul>
// <li>This is a first item</li>
// <li>This is a second item</li>
// <li>And another one!</li>
// <li>...and a last one</li>
// </ul>

var myArray = [],
    element = document.getElementById("header");

myArray.push("<ul><li>");
myArray.push("This is a first item");
myArray.push("</li><li>");
myArray.push("This is a second item");
myArray.push("</li><li>");
myArray.push("And another one!");
myArray.push("</li><li>");
myArray.push("...and a last one");
myArray.push("</li></ul>");

element.insertAdjacentHTML("beforeend", myArray.join(""));

var basket = {
  items: 0,
  totalPrice: 0.50,
  addItem: function() {},
  removeItem: function() {}
};

var propCount = 0,
    methodCount = 0;

for (prop in basket) {
  propCount += 1;
  if (typeof basket[prop] === "function") {
    methodCount += 1;
  }
}

console.log(propCount + " properties and " + methodCount + " methods.");

var myObject = {
    a: 1,
    b: 2,
    c: 3
};

var prop,
    message;

for (prop in myObject) {
  // "prop" will hold the name of property
  message = "Property name: " + prop + ", ";
  // Use myObject[prop] to get it's value
  message += "Value: " + myObject[prop];
  console.log(message);
}
