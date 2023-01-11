/* exported getFirstChar */
// Check if word is a string
// If it is not a string, return 'Invalid string'
// If it is a string, check the value of the string at index 0
// Return the value of the string at index 0
function getFirstChar(string) {
  if (typeof string !== 'string') {
    return 'Invalid string';
  } else {
    return string[0];
  }
}
