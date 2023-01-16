/* exported take */
// Define a function named 'take" that takes two arguments, array and count
//    Declare a variable named 'resultArr' and assign it to an empty array.
//    Check if the array length is strictly equal to 0,
//        If true, return an empty array.
//    Begin a loop that iterates through array, where
//        for each index in the array:
//             Add the value of the array at index to resultArr.
//    Return the value of the resultArr variable.
function take(array, count) {
  var resultArr = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < count; i++) {
    resultArr.push(array[i]);
  }
  return resultArr;
}
