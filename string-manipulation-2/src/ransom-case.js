/* exported ransomCase */
function ransomCase(string) {
  if (typeof string !== 'string') {
    return 'Invalid';
  } else {
    var lower = string.toLowerCase().split('');
    for (var i = 1; i < lower.length; i += 2) {
      lower[i] = lower[i].toUpperCase();
    }
    return lower.join('');
  }
}
