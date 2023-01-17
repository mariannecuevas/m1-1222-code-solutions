/* exported swapChars */
// Define a function named 'swapChars' that takes three arguments, firstIndex, secondIndex, and string.
//    Check if string is NOT type of string
//        If true, return "invalid"
//    Otherwise, declare a variable named 'arr' and assign it to an array of string characters.
//    Declare another variable named 'temp' and assign it to the value of array at the firstIndex value
//    Assign the value of array at the firstIndex value to the value of array at the secondIndex value
//    Then, assign the value of array at the secondIndex value to the value of the temp variable.
//    Finally, return the array back into a string.
function swapChars(firstIndex, secondIndex, string) {
  if (typeof string !== 'string') {
    return 'Invalid';
  } else {
    var arr = string.split('');
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
    return arr.join('');
  }
}
