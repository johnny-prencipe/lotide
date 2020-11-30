const assertArraysEqual = require('./assertArraysEqual.js');
const eqArrays = require('./eqArrays');

const middle = (needMiddle) => {
  const getMiddle = () => needMiddle.length / 2;
  if (needMiddle.length > 2) {
    if (needMiddle.length % 2 === 0) {
      return [needMiddle[getMiddle() - 1], needMiddle[getMiddle()]];
    } else {
      return [needMiddle[Math.floor(getMiddle())]];
    }
  }
  return [];
};

module.exports = (middle);