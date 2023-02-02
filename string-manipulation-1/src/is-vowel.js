/* exported isVowel */
//    Define a function named 'isVowel' which takes one argument, char.
//        Declare a variable named 'vowels' and assign it to a list of all the vowels, lowercase and uppercase.
//            Check if the char includes any of the vowels from the vowels list
//                If this condition is true, return true.
//            Check if the typeof char is NOT string or if the char length is greater than 2
//                If this condition is true, return Invalid String
//            If the char does not include a vowel from the vowels list, return false.
function isVowel(char) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (char.includes(vowels[i])) {
      return true;
    } else if (typeof char !== 'string' || char.length > 2) {
      return 'Invalid string';
    }
  }
  return false;
}
