//const assertEqual = (actual, expected) => {
//  if (actual === expected) {
//    return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
//  } else if (actual !== expected) {
//    return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
//  }
//};
//commeting this out, not sure why i added it

const countLetters = (sentence) => {
  let returnObj = {};
  for (let i of sentence.toLowerCase()) {
    if (returnObj[i]) {
      returnObj[i] += 1;
    } else if (!returnObj[i] && i !== ' ') { // better way to do this with
      //regex, need to watch some videos on it before i'm
      //comfortable using it though
      returnObj[i] = 1;
    }
  }
  console.log(returnObj);
};

module.exports = countLetters;
countLetters('The quick brown fox jumps over the lazy dog');
