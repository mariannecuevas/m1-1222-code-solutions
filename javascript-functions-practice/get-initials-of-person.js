/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var result = person.firstName[0] + person.lastName[0];
  return result;
}
