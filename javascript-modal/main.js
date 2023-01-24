var openBtn = document.querySelector('.btn-open');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.btn-close');

openBtn.addEventListener('click', function () {
  modal.className = 'modal-popup';
});

closeBtn.addEventListener('click', function () {
  modal.className = 'modal';
});
