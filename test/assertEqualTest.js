const assertEqual = require('../assertEqual.js');

console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual(true, 44));
console.log(assertEqual(44, '2340'));
console.log(assertEqual('asd', 'asd'));