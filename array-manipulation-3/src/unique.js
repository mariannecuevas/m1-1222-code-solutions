/* exported unique */
function unique(array) {

  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
