var numbers = [14, 22, 93];

var maximumValue = Math.max(...numbers);
console.log('maximumValue:', maximumValue);

var heroes = ['Thor', 'Spiderman', 'Black Panther', 'Scarlet Witch'];

var randomNumber = Math.random();

randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [{
  title: 'You Are Not So Smart',
  author: 'David McRaney'
},
{
  title: 'Good Girl, Bad Blood',
  author: 'Holly Jackson'
},
{
  title: 'The Book Thief',
  author: 'Markus Zusak'
}];

var lastBook = library.pop(library);
console.log('lastBook:', lastBook);

var firstBook = library.shift(library);
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('library:', library);

var fullName = 'Marianne Cuevas';

var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase(firstName);
console.log('sayMyName:', sayMyName);
