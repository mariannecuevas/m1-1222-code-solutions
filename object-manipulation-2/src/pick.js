/* exported pick */
// Define a function named 'pick' that takes two arguments, source and keys.
//    Declare a variable named 'result' and assign it to an empty object
//    Begin a loop that iterates through each key of the object,
//         For each key in the object,
//              Check if the value of each source key is strictly equal to undefined.
//                    If true, continue on to the next if statement
//               Otherwise, if the list of keys are included in thhe source keys,
//                     The value of the result keys will equal to the value of the source keys.
//    Return the value of the result variable.
function pick(source, keys) {
  var result = {};
  for (var key in source) {
    if (source[key] === undefined) {
      continue;
    } else if (keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
