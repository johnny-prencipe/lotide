//INCOMPLETE
//INCOMPLETE
//INCOMPLETE

//need to refactor to mmocha & chai

console.log(eqObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })); // true
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(ab, ba)); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false