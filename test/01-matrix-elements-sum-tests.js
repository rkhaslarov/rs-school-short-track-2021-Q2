const assert = require('assert');
const getMatrixElementsSum = require('../src/01-matrix-elements-sum');
it.optional = require('../extensions/it-optional');

describe('01-matrix-elements-sum', () => {
  it.optional('should return the sum of the matrix elements that are not below 0', () => {
    assert.strictEqual(getMatrixElementsSum([
      [0, 1, 1, 2],
      [0, 5, 0, 0],
      [2, 0, 3, 3],
    ]), 9);

    assert.strictEqual(getMatrixElementsSum([
      [1, 2, 3, 4],
      [0, 5, 0, 0],
      [2, 0, 3, 3],
    ]), 15);

    assert.strictEqual(getMatrixElementsSum([
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ]), 18);

    assert.strictEqual(getMatrixElementsSum([
      [0],
    ]), 0);

    assert.strictEqual(getMatrixElementsSum([
      [1],
      [5],
      [0],
      [2],
    ]), 6);
  });
});
