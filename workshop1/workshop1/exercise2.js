// Exercise 2 - Best Practices
// ---------------------------
// try to:
// avoid global variables
// use the single var pattern
// Initialise variables
// indent the code consistently
// Use whitepace to add clarity to the code
// respect one naming convention
// use semicolons/curly braces
// cache items when possible
// create optimized for loop
// use immediately invoked function when possible
// You should also enforce the conventions covered in exercise 1

// NB: The code runs without error in its current form and (almost) produces the correct results
// However, implementing the "best practices" should resolve the anomalies 
// tha you see in the results that are logged to the console
// In other words, you do not need to alter the logic or flow of the script.


function myfunction(){
  
    var MYARRAY = [1,20,4,65]

    function Add () {
    var total;
    for (i=0;i<MYARRAY.length;i++){total+=MYARRAY[i]} return total
    }

    function concat () {

    var result

    for (i = 0; i < MYARRAY.length; i++) {
    result += MYARRAY[i] + "";
    }

    return result 
    }

    addResult = Add ()
    concatresult = concat();

    console.log(addResult); console.log(concatresult);
}

        myfunction();