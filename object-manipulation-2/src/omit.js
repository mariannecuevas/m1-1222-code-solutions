/* exported omit */
function omit(source, keys) {
  var result = {};
  for (var key in source) {
    if (keys.includes(key)) {
      continue;
    } else if (source[key] !== keys) {
      result[key] = source[key];
    }
  }
  return result;
}
