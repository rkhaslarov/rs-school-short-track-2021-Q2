const assert = require('assert');
const findIndex = require('../src/10-find-index');
it.optional = require('../extensions/it-optional');

describe('10-find-element', () => {
  it.optional('should return index of an element from sorted array with a given value', () => {
    assert.equal(findIndex([1, 2, 3, 4, 5], 5), 4);
    assert.equal(findIndex([1, 2, 3, 4, 5], 3), 2);
    assert.equal(findIndex([1, 2, 3, 4, 5], 1), 0);
    assert.equal(findIndex([5, 6, 7], 7), 2);
    assert.equal(findIndex([5, 6, 7], 5), 0);
  });
});
