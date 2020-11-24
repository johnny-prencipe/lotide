const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
  }
};

console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual(true, 44));
console.log(assertEqual(44, '2340'));
console.log(assertEqual('asd', 'asd'));