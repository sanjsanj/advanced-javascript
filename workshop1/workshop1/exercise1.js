// Exercise 1 - Coding Conventions
// -------------------------------
// Try to:
// Indent the code consistently
// Follow Spacing conventions
// Use Curly braces and semicolons 
// Follow a naming convention

// NB: The code runs without errors in its current form and produces the correct results
// In other words, you do not need to alter the logic or flow of the code
// Your task is to make it more readable, nothing else.

function sumall (values) {
sum = 0;
for(var i=0;i<values.length;i++)
sum = sum + values[i]
alert(sum)
}


function isgreaterthan(x,y){
    if (x < y )
console.log(y + " is larger than " + x)
  
else if (x > y) {
      console.log(x + " is larger than " + y);}
else console.log("both numbers are equal")}


var addThis=[34,21,   667, 12]

sumall(
  addThis
    )

      isgreaterthan(10,20);