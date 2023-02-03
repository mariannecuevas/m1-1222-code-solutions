/* exported difference */
//    Define a function named 'difference', which takes two arguments, first and second, which are arrays.
//        Declare a variable 'newArr' and assign it to an empty array.
//            Begin a loop that iterates through the first array.
//                Check if the second array does NOT include any of the indexes in the first array
//                    If this condition is true, add those first array indexes to the newArr array.
//            Begin another loop that iterates throught the second array.
//                Check if the first array does NOT include any of the indexes in the second array
//                    If this condition is true, paddush those second array indexes to the newArr array.
//        Return the value of the newArr variable
function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!first.includes(second[x])) {
      newArr.push(second[x]);
    }
  }
  return newArr;
}
