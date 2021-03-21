const assert = require('assert');
const sortByHeight = require('../src/03-sort-by-height');
it.optional = require('../extensions/it-optional');

describe('03-sort-by-height', () => {
  it.optional('should return sorted array without moving -1', () => {
    assert.deepEqual(
      sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]),
      [-1, 150, 160, 170, -1, -1, 180, 190],
    );
    assert.deepEqual(
      sortByHeight([-1, -1, -1, -1, -1]),
      [-1, -1, -1, -1, -1],
    );
    assert.deepEqual(
      sortByHeight([-1]),
      [-1],
    );
    assert.deepEqual(
      sortByHeight([4, 2, 9, 11, 2, 16]),
      [2, 2, 4, 9, 11, 16],
    );
    assert.deepEqual(
      sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]),
      [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
    );
  });
});
