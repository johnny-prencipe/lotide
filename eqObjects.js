//const assertEqual = (actual, expected) => {
//  if (actual === expected) {
//    return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
//  } else if (actual !== expected) {
//    return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
//  }
//}; //commenting out, didn't use

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

console.log(eqObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })); // true
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(ab, ba)); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false