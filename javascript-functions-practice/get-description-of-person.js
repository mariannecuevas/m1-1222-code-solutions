/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var result = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return result;
}
