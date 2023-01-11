/* exported tail */
// Define a function named tail that takes one argument, array.
//    Declare a variable named 'arr' and assign it to an empty array.
//    Begin a loop that iterates through the array, where
//        the value of the array at index i is being added to the array.
//    Return the value of the variable 'arr'
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
