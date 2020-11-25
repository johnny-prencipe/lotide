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

const assertArraysEqual = (checkFirst, checkSecond) => {
  if (eqArrays(checkFirst, checkSecond) === true) {
    return `✅✅✅ Assertion passed. The first array === the second array.`;
  } else {
    return `🛑🛑🛑 Assertion failed. The first array !== the second array.`;
  }
}


const without = (source, itemsToRemove) => {
  const workingArr = source;
  
  for (let item in workingArr) {
    if (itemsToRemove.includes(workingArr[item])) {
      workingArr.splice(item, 1);
    }
  }
  return workingArr;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));