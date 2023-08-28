/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
   // Check if x and y are numeric
  if (typeof x !== "number" || typeof y !== "number") {
    return -1;
  }

    x = x + y;
    y = x - y;
    x = x - y;
    console.log('x:' + x);
    console.log('y:' + y);
    }

// Task 2: Add code here
let x = 20;
let y = 30;
swap(x,y);
module.exports = swap;
