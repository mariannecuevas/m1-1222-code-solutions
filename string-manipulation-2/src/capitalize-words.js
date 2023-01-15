/* exported capitalizeWords */
function capitalizeWords(string) {
  if (typeof string !== 'string') {
    return 'Invalid';
  } else {
    var lower = string.toLowerCase().split(' ');
    for (var i = 0; i < lower.length; i++) {
      lower[i] = lower[i].charAt(0).toUpperCase() + lower[i].substring(1);
    }
    return lower.join(' ');
  }
}
