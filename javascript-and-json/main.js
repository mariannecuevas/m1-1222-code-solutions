var books = [
  {
    ibsn: 978043902348,
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  },
  {
    ibsn: 9780545586177,
    title: 'Catching Fire',
    author: 'Suzanne Collins'
  },
  {
    ibsn: 9781407109374,
    title: 'Mockingjay',
    author: 'Suzanne Collins'
  }
];

console.log('value of books:', books);
console.log('typeof:', typeof books);

console.log('value:', JSON.stringify(books));
console.log('typeof:', typeof JSON.stringify(books));

var json = '{"number id": 123781, "name": "Marianne Cuevas"}';

console.log('value of json:', json);
console.log('typeof json:', typeof json);

var obj = JSON.parse(json);
console.log('value of obj:', obj);
console.log('typeof obj:', typeof obj);
