const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
  }
};

const countOnly = (allItems, itemsToCount) => {
  const countedItems = {};

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));