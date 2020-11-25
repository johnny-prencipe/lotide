const eqArrays = (firstArr, secondArr) => {
  //off the bat return flase if they're different lengths
  if (firstArr.length != secondArr.length) {
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
}

const assertArraysEqual = (firstArr, secondArr) => {
  if (eqArrays(firstArr, secondArr) === true) {
    return `✅✅✅ Assertion passed. The first array === the second array.`;
  } else {
    return `🛑🛑🛑 Assertion failed. The first array !== the second array.`;
  }
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true