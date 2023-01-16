/* exported takeRight */
// Define a function named 'takeRight" that takes two arguments, array and count
//    Check if count is greater than the array length
//        If true, return array
//    Otherwise, return the last elements of the array with the expression, array length minus count
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    return array.slice(array.length - count);
  }
}
