var calc = (function () {
  var init,
      calcEvent;

  init = function () {
    console.log("calc init");
    calcEvent = new CustomEvent("customCalcEvent", {
      "detail": {

      }
    })
  };

  return {
    init: init
  }
})();

calc.init();
