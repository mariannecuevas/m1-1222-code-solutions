/* exported intersection */
//    Define a function named 'intersection', which takes two arguments, first and second, which are arrays.
//        Declare a variable named 'newArr' and assign it to an empty array.
//        Begin a loop that iterates through the first array.
//            Check if the second array includes any of the indexes in the first array
//                If this condition is true, add those same indexes from the first array to the newArr array
//        Return the value of the newArr variable.
function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}
