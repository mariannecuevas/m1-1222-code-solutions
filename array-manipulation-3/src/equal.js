/* exported equal */
//    Define a function named 'equal', which takes two arguments, first and second, which are arrays.
//        Check if the length of the first is NOT strictly equal to the length of the second.
//            If this condition is true, return false.
//        Otherwise, begin a loop that iterates through the first,
//             Check if the value of first and second at the same index is NOT strictly equal.
//                  If this condition is true, return false.
//         Return 'true' if none of the previous if statements are met.

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
}
