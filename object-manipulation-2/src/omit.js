/* exported omit */
function omit(source, keys) {
  var result = {};
  for (var key in source) {
    if (keys.includes(key)) {
      delete source[key];
    } else if (source[key] !== keys) {
      result[key] = source[key];
    }
  }
  return result;
}
