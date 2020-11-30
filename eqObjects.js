const eqArrays = require('./eqArrays')
const eqObjects = (object1, object2) => {
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  const objOneKeys = Object.keys(object1);
  const objTwoKeys = Object.keys(object2);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  
  for (let key of objOneKeys) {
    if (Array.isArray(object1[key]) &&  Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = (eqObjects);