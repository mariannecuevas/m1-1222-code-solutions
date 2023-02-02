/* exported zip */
function zip(first, second) {
  var newArray = [];
  if (first.length > second.length) {
    var subtract = first.length - second.length;
    var newFirst = first.slice(0, first.length - subtract);
    for (var i = 0; i < newFirst.length; i++) {
      var otherPair = [newFirst[i], second[i]];
      newArray.push(otherPair);
    }
  } else {
    for (var j = 0; j < first.length; j++) {
      var pair = [first[j], second[j]];
      newArray.push(pair);
    }
  }
  return newArray;
}
