/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  if (typeof word !== 'string') {
    return 'Invalid';
  } else if (lowerCase === 'javascript') {
    return 'JavaScript';
  } else {
    var capitalize = lowerCase[0].toUpperCase() + lowerCase.slice(1);
    return capitalize;
  }
}
