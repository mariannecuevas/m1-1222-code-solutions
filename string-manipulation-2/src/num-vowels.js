/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var arr = string.toLowerCase().split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(arr[i])) {
      count++;
    }
  }
  return count;
}
