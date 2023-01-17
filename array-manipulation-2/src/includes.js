/* exported includes */
// Define a function named 'includes" that takes two arguments, array and value
//    Begin a loop that iterates through array, where
//        for each index in the array:
//             Check if the array at an index is strictly equal to value
//                  If true, return true;
//    Otherwise return false.
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
