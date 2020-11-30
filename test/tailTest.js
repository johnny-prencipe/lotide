const { italic } = require('ansi-colors');
const tail = require('../tail.js');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns [2, 3] given [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('returns ["Lighthouse", "Labs"] when passed ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it ('returns 2 elements when given an array of 3', () => {
    assert.lengthOf(tail([1, 2, 3]), 2);
  });
  it('returns empty array if length is equal to 1', () => {
    assert.lengthOf(tail([1]), 0);
  });
  it('returns empty array if length is equal to 0', () => {
    assert.lengthOf(tail([]), 0);
  });
});

