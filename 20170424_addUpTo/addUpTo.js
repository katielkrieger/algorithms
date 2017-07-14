/*
Implement a function called addUpTo which takes a number as an argument 
and adds up all the whole numbers from 1 up to and including the number passed in.

Some edge cases to consider:

If the argument passed in is not a number, the function should return NaN.
If the argument passed in is less than 1, the function should return 0.
If the argument passed in is not a whole number, the function should add up 
all the whole numbers between 1 and the largest whole number less than the 
argument passed in.

Examples:

addUpTo(5); // 15, since 1 + 2 + 3 + 4 + 5 = 15
addUpTo(10); // 55
addUpTo("three"); // NaN
addUpTo(null); // NaN
addUpTo(0); // 0
addUpTo(-100); // 0
addUpTo(3.4); // 6
addUpTo(5.9999999); // 15
*/

function addUpTo(num) {
  // if not a number --> NaN
  if(typeof num !== "number") {
    return NaN;
  }

  // not a whole number --> round down
  if(Math.floor(num) !== num) {
    num = Math.floor(num);
  }
  
  // regular case (whole, positive number)
  // also takes care of negatives and zero
  var sum = 0;
  for (var i=num; i>0; i--) {
    sum = sum + i;
  }
  return sum;
}
