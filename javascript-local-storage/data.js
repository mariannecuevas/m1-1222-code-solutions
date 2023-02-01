/* exported todos */

var todos = [];

todos = JSON.parse(localStorage.getItem('javascript-local-storage'));

window.addEventListener('beforeunload', function () {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
