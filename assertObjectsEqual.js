const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;


const assertObjectsEqual = (object1, object2) => {
  if (eqObjects(object1, object2) === true) {
    //same as assertArraysEqual
    return `✅✅✅ Assertion Passed.`;
  } else {
    return `🛑🛑🛑 Assertion Failed.`;
  }
};

module.exports = (assertObjectsEqual);