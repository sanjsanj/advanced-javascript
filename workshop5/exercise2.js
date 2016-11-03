// The element to attach the listener to
var buttonWrapper = document.getElementById('button-wrapper'),
    attr,
    target;

buttonWrapper.addEventListener("click", function (event) {
  target = event.target;
  attr = target.getAttribute('data-action');

  if (attr != null) {
    console.log(attr);
  };
});
