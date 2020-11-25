const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
  }
};

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
  if (eqArrays(Object.keys(object1), Object.keys(object2)) && eqArrays(Object.values(object1), Object.values(object2))) {
    return true;
  }
  return false;
}

console.log(eqObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }));