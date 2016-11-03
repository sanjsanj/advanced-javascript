var listManager = (function () {
  var btn = document.getElementById("add-button"),
  textEl = document.getElementById("element-description"),
  ul = document.getElementById("element-wrapper"),
  textValue,
  li,
  target,
  addEvent,
  removeEvent,
  addElement,
  getItemCount,
  itemCountSpan;

  function init () {
    addElement();
    updateElement();
    addEventListeners();
  };

  function addEventListeners () {
    btn.addEventListener("click", function (event) {
      textValue = textEl.value;

      if (textValue != "") {
        addListItem(textValue);
        addEvent.detail.text = textValue;
        document.dispatchEvent(addEvent)
        updateElement();
        textEl.value = "";
      };
    });

    ul.addEventListener("click", function (event) {
      target = event.target;

      if (target.className === "element") {
        removeEvent.detail.text = target.textContent;
        document.dispatchEvent(removeEvent);
        target.parentNode.removeChild(target);
        updateElement();
      };
    });
  };

  function addElement () {
    ul.insertAdjacentHTML("afterbegin", "<p>Total: <span id=\"total-items\"></span></p>");
    itemCountSpan = document.getElementById("total-items");
  };

  function updateElement () {
    itemCountSpan.textContent = getItemCount();
  };

  function getItemCount () {
    return document.getElementsByClassName("element").length;
  };

  function addListItem (text) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    li.setAttribute("class", "element");
    ul.appendChild(li);
  };

  addEvent = new CustomEvent("AddEvent", {
    "detail": {
      "text": ""
    }
  });

  removeEvent = new CustomEvent("RemoveEvent", {
    "detail": {
      "text": ""
    }
  });

  return {
    init: init
  }
}());

document.addEventListener("AddEvent", function (event) {
  var toLog = event.detail.text;
  console.log("Adding: " + toLog);
});

document.addEventListener("RemoveEvent", function (event) {
  var toLog = event.detail.text;
  console.log("Removing: " + toLog);
});

listManager.init();
