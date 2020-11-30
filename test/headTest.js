const head = require('../head.js');
const assertEqual = require('../assertEqual.js');

assertEqual(head([1, 2, 3])); // should fail
console.log(head([typeof(head), false, true])); // function
console.log(head([`${assertEqual}`, 1, 'asd'])); // should fail
console.log(assertEqual(head([5,6,7]), 5)); // should pass
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")); // should pass
console.log(head([])); // undefined