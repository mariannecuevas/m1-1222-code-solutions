/* exported truncate */
// Define a function named 'truncate' that takes two arguments, length and string.
//    Check if string is NOT type of string
//        if true, return "Invalid"
//    Check if the value of length is greater than or equal to the length of the string,
//        if true, return the value of the string and concatenate it with '...'
//    Otherwise, return the shortened string at the given length value concatenated with '...'
function truncate(length, string) {
  if (typeof string !== 'string') {
    return 'Invalid';
  } else if (length >= string.length) {
    return string + '...';
  } else {
    return string.slice(0, length) + '...';
  }
}
