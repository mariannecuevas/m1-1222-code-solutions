/* exported getKeys */
// Define a function, named getKeys, that takes one argument, object.
//    Declare a variable named 'keys', and assign it to an empty array.
//    Begin a loop that loops through the keys of an object, where
//        the value of the keys are being added to the array, 'keys'.
//    Return the value of the keys variable.
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
