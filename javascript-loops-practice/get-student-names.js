/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    var individual = students[i].name;
    names.push(individual);
  }
  return names;
}
