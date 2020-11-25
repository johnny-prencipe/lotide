const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
  }
};

const eqObjects = (object1, object2) => {
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  
}