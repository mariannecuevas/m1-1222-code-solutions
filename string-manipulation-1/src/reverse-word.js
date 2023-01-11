/* exported reverseWord */
function reverseWord(word) {
  if (typeof word !== 'string') {
    return 'Invalid string';
  }
  var arr = [];
  for (var i = word.length; i >= 0; i--) {
    arr.push(word[i]);
  }
  return arr.join('');
}
