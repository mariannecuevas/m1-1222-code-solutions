/* exported titleCase */
function titleCase(title) {
  var words = title.toLowerCase().split(' ');
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < words.length; i++) {
    // console.log(words[i]);
    if (words[i] === 'javascript') {
      words[i] = 'JavaScript';
    } else if (words[i] === 'Javascript:' || words[i] === 'javascript:') {
      words[i] = 'JavaScript:';
    } else if (words[i] === 'api') {
      words[i] = 'API';
    } else if (words[i - 1] && words[i - 1].includes(':')) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    } else if (words[i].includes('-')) {
      var dashWords = words[i].split('-');
      words[i] = dashWords[0][0].toUpperCase() + dashWords[0].slice(1) + '-' + dashWords[1][0].toUpperCase() + dashWords[1].slice(1);
    } else if (minor.includes(words[i]) && i !== 0) {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(' ');
}
