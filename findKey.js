const findKey = (object, callback) => {
  for (let key in object) {
    console.log(key)
  }
}

findKey({a: 1, b: 2, c: 3}, map());