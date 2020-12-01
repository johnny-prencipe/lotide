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
  return(returnObj);
};

module.exports = countLetters;