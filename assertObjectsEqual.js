const eqArrays = (firstArr, secondArr) => {
  //off the bat return flase if they're different lengths
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  //add a for-in loop to check each index in both arrays
  //against each other, item by item.
  //if there's ever a mismatch, return false
  for (let i in firstArr) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  //return true after the previous checks pass.
  return true;
};

const eqObjects = (object1, object2) => {
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;

  } else {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) &&  Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = (object1, object2) => {
  //import util lib
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    //same as assertArraysEqual
    return `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
};


const a = {a: 1, b: 2, c: 3};
const b = {a: 1, b: 2, c: 3};
const c = {a: 2, c: 33, b: 4};

//tester code
console.log(assertObjectsEqual(a, b)); //pass
console.log(assertObjectsEqual(c, b)); //fail