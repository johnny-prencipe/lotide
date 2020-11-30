const middle = require('../middle.js');
const eqArrays = require('../eqArrays.js');
const assertArraysEqual = require('../assertArraysEqual.js');

console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));