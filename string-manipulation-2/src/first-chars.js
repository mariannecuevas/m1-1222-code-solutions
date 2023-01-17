/* exported firstChars */
// Define a function named 'firstChars' that takes two arguments, length and string.
//    Check if string is NOT type of string OR if the length value is smaller than 0.
//        If true, return "Invalid"
//    Otherwise, return the string at a given length value.
function firstChars(length, string) {
  if (typeof string !== 'string' || length < 0) {
    return 'Invalid';
  } else {
    return string.substring(0, length);
  }
}
