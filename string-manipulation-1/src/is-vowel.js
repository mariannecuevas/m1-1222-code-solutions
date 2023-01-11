/* exported isVowel */
// Check if char is a string or if the length of char is greater than 2,
// If it is not a string or if the length of char is greater than 2, return 'Invalid string'
// If it is a string,
// Check if the character is 'a'
// if true, return 'true'
// Check if the character is 'e'
// if true, return 'true'
// Check if the character is 'i'
// if true, return 'true'
// Check if the character is 'o'
// if true, return 'true'
// Check if the character is 'u'
// if true, return 'true'
// Check if the character is 'A'
// if true, return 'true'
// Check if the character is 'E'
// if true, return 'true'
// Check if the character is 'I'
// if true, return 'true'
// Check if the character is 'O'
// if true, return 'true'
// Check if the character is 'U'
// if true, return 'true'
// If character does not match any of the conditions above
// then return 'false'
function isVowel(char) {
  if (typeof char !== 'string' || char.length > 2) {
    return 'Invalid string';
  } else if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
