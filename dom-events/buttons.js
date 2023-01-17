function handClick(event) {
  console.log('button click');
  console.log(event);
  console.log(event.target);
}
var $click = document.querySelector('.click-button');

$click.addEventListener('click', handClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var $hover = document.querySelector('.hover-button');

$hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var $doubleClick = document.querySelector('.double-click-button');

$doubleClick.addEventListener('dblclick', handleDoubleClick);
