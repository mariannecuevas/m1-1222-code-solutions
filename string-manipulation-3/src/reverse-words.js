/* exported reverseWords */
//  Define a function, named 'reverseWords', that takes one argument, string.
//     Declare a variable named 'words' and assign it to the string where the characters of each word are in reverse order.
//     Declare a variable named 'reverseWords' and assign it to the string where the words of the string are in reverse order.
//     Return the value of the reverseWords variable.
function reverseWords(string) {
  var words = string.split('').reverse().join('');
  var reverseWords = words.split(' ').reverse().join(' ');
  return reverseWords;
}
