/* exported defaults */
function defaults(target, source) {
  for (var keys in source) {
    if (typeof target[keys] === 'undefined') {
      target[keys] = source[keys];
    }
  }
}
