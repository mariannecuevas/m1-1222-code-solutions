/* exported flatten */
//    Define a function named 'flatten', which takes one arguments, an array.
//        Declare a variable named 'newArray' and assign it to an empty array.
//        Begin a loop that iterates through the array
//            Declare a variable named 'arr' and assign it to the array at an index
//            Check if the variable arr is NOT an array.
//                If this condition is true, add the value of variable arr to the newArray.
//            Otherwise, if variable arr is an array, begin another loop that iterates through that array.
//                Add the value of the variable arr at an index to the newArray.
//    Return the value of the newArray variable.

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var arr = array[i];
    if (!Array.isArray(arr)) {
      newArray.push(arr);
    } else {
      for (var x = 0; x < arr.length; x++) {
        newArray.push(arr[x]);
      }
    }
  }
  return newArray;
}
