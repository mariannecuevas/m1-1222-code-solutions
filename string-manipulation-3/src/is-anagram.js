/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var remove = /[\W]/g;
  var stringOne = firstString.replace(remove, '').split('').sort().join('');
  var stringTwo = secondString.replace(remove, '').split('').sort().join('');
  if (stringOne === stringTwo) {
    return true;
  }
  return false;
}
