MATH.calc = (function (MATH) {
    
    var init,
        whichButton,
        calcState = null,
        calculator = document.getElementById("calc"),
        view = document.getElementById("calc-view"),

        init = function () {
            calculator.addEventListener("click", whichButton);
        };
        
        whichButton = function (e) {
            
            // Get reference to clicked button... and retrieve its 
            // "data-type" and "data-value" attributes
            var buttonClicked = e.target,
                buttonType = buttonClicked.getAttribute("data-type"),
                buttonValue = buttonClicked.getAttribute("data-value"),
                existingData;
            
            // We could use a series of if/else if statements here, but a  
            // switch statement seems more graceful in this scenario.    
            switch (buttonType) {
                
                case 'digit' :
                
                    // when a digit button is clicked
                    
                    // Get whatever is currently in the view
                    existingData = view.value;                    
                    // append clicked number to existing data (to allow for numbers greater than 9)
                    view.value = existingData + buttonValue;            
                    break;
                    
                case 'add' :
                
                    // when the add button is clicked...
                    
                    // set flag to "add" 
                    calcState = "add";
                    // set the MATH total to whatever is currently in the view
                    MATH.set(parseInt(view.value));
                    // clear the view
                    view.value = "";
                    break;
                    
                case 'sub' :
                
                    // when the sub button is clicked...
                    
                    // set flag to "sub"
                    calcState = "sub";                
                    // set the MATH total to whatever is currently in the view
                    MATH.set(parseInt(view.value));                
                    // clear the view
                    view.value = "";
                    break;
                    
                case 'result' :
                
                    // when result button is clicked...
                    
                    // check the calc state flag and add or subtract from MATH total
                    if (calcState === "add") {
                        MATH.add(parseInt(view.value));
                    }
                    else if (calcState === "sub") {
                        MATH.sub(parseInt(view.value));
                    }                    
                    // update view with current total from MATH
                    view.value = MATH.get();
                    break;
                    
                case 'clear' :
                
                    // when the clear button is clicked...
                    
                    // reset the view and set MATH total to 0
                    view.value = "";
                    MATH.total = 0;
                    break;
                    
            }
                        
        };
                
    return {
        init: init
    }
    
})(MATH);

MATH.calc.init();
