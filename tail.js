const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
  }
};

const tail = (arr) => {
  const outputArr = [];
  for (let i = 0; i < arr.length; i ++) {
    if (i !== 0) {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
};

module.exports = (tail);