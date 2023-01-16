/* exported chunk */
function chunk(array, size) {
  var resultArr = [];
  for (var element of array) {
    var lastArr = resultArr[resultArr.length - 1];
    if (lastArr === undefined || lastArr.length === size) {
      resultArr.push([element]);
    } else {
      lastArr.push(element);
    }
  }
  return resultArr;
}
