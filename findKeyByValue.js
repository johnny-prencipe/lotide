const assertEqual = require('./assertEqual')

const findKeyByValue = (inputObj, value) => {
  for (let key of Object.keys(inputObj)) {
    if (inputObj[key] === value) {
      return key;
    }
  }
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")); //pass
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)); //pass
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama")); // should fail
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi")); //pass

module.exports(findKeyByValue)