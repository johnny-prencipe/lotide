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

const assertArraysEqual = (firstArr, secondArr) => {
  if (eqArrays(firstArr, secondArr) === true) {
    return `✅✅✅ Assertion passed. The first array === the second array.`;
  } else {
    return `🛑🛑🛑 Assertion failed. The first array !== the second array.`;
  }
};

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

//tester code
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));