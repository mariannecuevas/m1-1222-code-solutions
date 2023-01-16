/* exported invert */
// Define a function named 'invert' that takes one argument, source.
//    Declare a variable named 'newObject' and assign it to an empty object
//    Begin a loop that iterates through each key of the object,
//         For each key in the object,
//              The values of each keys in the source object will be assigned to newObject keys, and
//              the source keys will be assigned to the newObject values.
//   Return the result of the variable newObject
function invert(source) {
  var newObject = {};
  for (var key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
