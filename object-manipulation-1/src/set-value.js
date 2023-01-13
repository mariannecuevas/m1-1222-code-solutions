/* exported setValue */
// Define a function named setValue that takes three arguments, object, key and value.
//    Declare a variable named 'keyValue', and asisgn it to the result of the expression object at key = value.
//    Return the value of the keyValue variable.
function setValue(object, key, value) {
  var keyValue = object[key] = value;
  return keyValue;
}
