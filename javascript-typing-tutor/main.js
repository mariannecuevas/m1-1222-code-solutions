
var chars = document.querySelectorAll('span');

var i = 0;
var charIndex = chars[i];
var quoteLength = chars.length;
charIndex.classList.add('cursor');

function keydown(event) {
  if (i === quoteLength) {
    return;
  }
  var typedChar = event.key;
  if (typedChar === 'Backspace') {
    charIndex.classList.remove('cursor');
    charIndex.classList.remove('correct');
    charIndex.classList.remove('incorrect');
    charIndex.classList.add('cursor');
  } else if (typedChar === ' ' && charIndex.innerText !== '') {
    charIndex.classList.add('incorrect');
  } else if (typedChar === ' ' && charIndex.innerText === '') {
    charIndex.classList.remove('cursor');
    charIndex.classList.remove('correct');
    charIndex.classList.remove('incorrect');
    charIndex = chars[i + 1];
    i++;
  } else {
    if (charIndex.innerText === typedChar) {
      charIndex.classList.remove('cursor');
      charIndex.classList.remove('incorrect');
      charIndex.classList.add('correct');
      charIndex = chars[i + 1];
      i++;
      if (charIndex) {
        charIndex.classList.add('cursor');
      }
    } else if (charIndex.innerText !== typedChar) {
      charIndex.classList.remove('cursor');
      charIndex.classList.add('incorrect');
    }
  }
}

document.addEventListener('keydown', keydown);
