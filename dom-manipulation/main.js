var $clicksTotal = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  $clicksTotal++;
  $clickCount.textContent = 'Clicks: ' + $clicksTotal;
  if ($clicksTotal < 4) {
    $hotButton.className = 'hot-button cold';
  } else if ($clicksTotal < 7) {
    $hotButton.className = 'hot-button cool';
  } else if ($clicksTotal < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if ($clicksTotal < 13) {
    $hotButton.className = 'hot-button warm';
  } else if ($clicksTotal < 16) {
    $hotButton.className = 'hot-button hot';
  } else if ($clicksTotal >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
});
