/* exported getWords */
function getWords(string) {
  if (typeof string !== 'string') {
    return 'Invalid string';
  } else if (string === '') {
    return [];
  }
  var words = string.split(' ');
  return words;
}
