/* exported capitalize */
// Check if word is a string
// If it is not a string, return 'Invalid string'
// If it is a string, access the string at index 0 and convert the string at index 0 to uppercase
// Access the rest of the string and convert the rest of the string to lowercase
function capitalize(word) {
  if (typeof word !== 'string') {
    return 'Invalid string';
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
