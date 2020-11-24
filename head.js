const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
  }
};

const head = (arr) => arr[0];

console.log(head([1, 2, 3]));
console.log(head([typeof(head), false, true]));
console.log(head([`${assertEqual}`, 1, 'asd']));
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(head([]));