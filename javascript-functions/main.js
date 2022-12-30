function convertMinutesToSeconds(minutes) {
  var result = minutes * 60;
  return result;
}

var seconds = convertMinutesToSeconds(5);

console.log('seconds:', seconds);

function greet(name) {
  var result = 'Hey, ' + name;
  return result;
}

var greeting = greet('Beavis');
console.log('greeting:', greeting);

function getArea(width, height) {
  var result = width * height;
  return result;
}

var area = getArea(17, 42);
console.log('area:', area);

function getFirstName(person) {
  var result = person.firstName;
  return result;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('first name:', firstName);

function getLastElement(array) {
  var i = array.length - 1;
  var result = array[i];
  return result;
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('last element:', lastElement);
