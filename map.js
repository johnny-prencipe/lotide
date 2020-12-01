const words = ['ground', 'control', 'to', 'major', 'tom', 'commencing', 'countdown', 'engines', 'on'];
const evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const map = function(array, callback) {
  const results = [];
  array.forEach(item => {
    results.push(callback(item));
  });
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(evens, number => number / 2);
console.log(results2);

const results3 = map(odds, num => num * 2);
console.log(results3);

module.exports(map);