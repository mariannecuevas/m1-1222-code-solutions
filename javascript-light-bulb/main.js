var clicksTotal = 0;
var lightOff = document.querySelector('.light-on');

lightOff.addEventListener('click', function () {
  clicksTotal++;
  if (clicksTotal % 2 !== 0) {
    var dark = document.querySelector('.light');
    lightOff.className = 'light-off';
    dark.className = 'dark';
  } else if (clicksTotal % 2 === 0) {
    var light = document.querySelector('.dark');
    lightOff.className = 'light-on';
    light.className = 'light';
  }
});
