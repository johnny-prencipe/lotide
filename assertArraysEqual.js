const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (firstArr, secondArr) => {
  if (eqArrays(firstArr, secondArr) === true) {
    return `✅✅✅ Assertion passed. The first array === the second array.`;
  } else {
    return `🛑🛑🛑 Assertion failed. The first array !== the second array.`;
  }
};

module.exports=(assertArraysEqual);