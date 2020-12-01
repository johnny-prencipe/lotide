const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const flatten = (inputArr) => {
  const returnArr = [];
  for (let element in inputArr) {
    if (!Array.isArray(inputArr[element])) {
      returnArr.push(inputArr[element]);
    } else {
      for (let innerElement of inputArr[element]) {
        returnArr.push(innerElement);
      }
    }
  }
  return returnArr;
};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]], [1, 2, 3, 4, 5, 6])));

module.exports(flatten);