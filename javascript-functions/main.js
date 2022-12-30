function convertMinutesToSeconds(minutes) {
  var result = minutes * 60;
  return result;
}

var seconds = convertMinutesToSeconds(5);

console.log('seconds:', seconds);

function greet(name) {
  var greeting = 'Hey, ' + name;
  console.log(greeting);
}

greet('Beavis');

function getArea(width, height) {
  var result = width * height;
  return result;
}

var area = getArea(17, 42);
console.log('area:', area);

function getFirstName(person) {
  console.log(person.firstName);
}

getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var i = array.length - 1;
  var result = array[i];
  console.log(result);
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
