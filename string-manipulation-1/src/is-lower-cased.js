/* exported isLowerCased */
function isLowerCased(word) {
  if (typeof word !== 'string') {
    return 'Invalid string';
  } else if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
