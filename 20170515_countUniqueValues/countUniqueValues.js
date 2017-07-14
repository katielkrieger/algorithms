/*
Implement a function called countUniqueValues

Given a sorted array, count the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

Examples:

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

Do this in O(n) time and O(n) space

Bonus

You must do this with constant or O(1) space and O(n) time.
*/

function countUniqueValues(arr){
  // 9:40
  var counter = arr.length;
  var i = 0;
  var j = 1;
  while (i < arr.length && j < arr.length) {
    if (arr[i] === arr[j]) {
      counter--;
    }
    i++;
    j++;
  }
  return counter;
}
