const letterPositions = (sentence) => {
  const results = {};

  for (let i in sentence.toLowerCase()) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(Number(i));

    } else if (!results[sentence[i]] && sentence[i] !== ' ') {
      results[sentence[i]] = [Number(i)];
      
    }
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('hello'));

module.exports = (letterPositions);