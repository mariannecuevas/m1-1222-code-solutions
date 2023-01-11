/* exported isUpperCased */
// Check if word is a string
// If it is not a string, return 'Invalid string'
// If it is a string, check if the string is strictly equal to all uppercase characters of the string
// if true, return 'true'
// if the string does not strictly equal to all uppercase characters of the string
// then return 'false'
function isUpperCased(word) {
  if (typeof word !== 'string') {
    return 'Invalid string';
  } else if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
