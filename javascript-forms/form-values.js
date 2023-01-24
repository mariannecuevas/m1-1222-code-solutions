var contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var inputs = {
    name: document.querySelector('#user-name').value,
    email: document.querySelector('#user-email').value,
    message: document.querySelector('#user-message').value
  };
  console.log('messageData:', inputs);
  document.querySelector('#contact-form').reset();
});
