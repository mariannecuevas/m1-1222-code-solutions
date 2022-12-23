var student = {
  firstName: 'Marianne',
  lastName: 'Cuevas',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'retail worker';
console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'BMW',
  model: 'X4',
  year: '2022'
};

vehicle['color'] = 'midnight blue';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConverible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'siopao',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
