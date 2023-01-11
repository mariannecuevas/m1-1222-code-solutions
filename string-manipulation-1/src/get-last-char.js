/* exported getLastChar */
// Check if word is a string
// If it is not a string, return 'Invalid string'
// If it is a string, subtract 1 from the length of the string and assign the result of that expression to variable i
// Return the value of the string at the index which is the result of that expression
function getLastChar(string) {
  if (typeof string !== 'string') {
    return 'Invalid string';
  } else {
    var i = string.length - 1;
    return string[i];
  }
}
