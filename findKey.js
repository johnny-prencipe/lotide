const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

console.log(findKey({a: 1, b: 2, c: 3}, x => x === 2)); //'b'

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

console.log(findKey({a: 'a', b: 'b', c: 'c'}, x => typeof(x) !== 'string')); //should fail