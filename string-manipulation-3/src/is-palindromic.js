/* exported isPalindromic */
//  Define a function, named 'isPalindromic', that takes one argument, string.
//     Declare a variable named 'remove' and assign it to the expression globally non word characters.
//     Declare a variable named 'newString' and assign it to the string replacing the globally non word characters to an empty string.
//     Declare a variable named 'reverse' and assign it to the newString variable being reversed.
//     Check if the reverse variable is strictly equal to the newString variable.
//          If true, return true.
//     If false, return false.
function isPalindromic(string) {
  var remove = /[\W]/g;
  var newString = string.replace(remove, '');
  var reverse = newString.split('').reverse().join('');
  if (reverse === newString) {
    return true;
  }
  return false;
}
