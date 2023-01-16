/* exported defaults */
function defaults(target, source) {
  for (var keys in source) {
    if (Object.prototype.hasOwnProperty.call(source, keys) && !Object.prototype.hasOwnProperty.call(target, keys)) {
      target[keys] = source[keys];
    }
  }
}
