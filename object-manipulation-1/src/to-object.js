/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  for (var i = 0; i < keyValuePair.length; i += 2) {
    object[keyValuePair[i]] = keyValuePair[i + 1];
  }
  return object;
}
