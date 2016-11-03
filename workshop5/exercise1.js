// The elements to attach "click" handlers to
var docBody = document.body,
    parentElement = document.getElementById('parent'),
    childElement = document.getElementById('child');

// Add your listeners here...
// add event handlers for these elements:
// • #child • #parent • body
// All 3 handlers should listen for the click event on the respective element. In each handler, con- sole.log a message stating which handler it is.

// childElement.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log('I am the child');
//   console.log(event.target);
// });
//
// parentElement.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log('I am the parent');
//   console.log(event.target);
// });
//
// docBody.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log('I am the body');
//   console.log(event.target);
// });

childElement.addEventListener("mouseleave", function (event) {
  event.stopPropagation();
  console.log('I am the child');
  console.log(event.target);
});

parentElement.addEventListener("mouseleave", function (event) {
  event.stopPropagation();
  console.log('I am the parent');
  console.log(event.target);
});

docBody.addEventListener("mouseleave", function (event) {
  event.stopPropagation();
  console.log('I am the body');
  console.log(event.target);
});
