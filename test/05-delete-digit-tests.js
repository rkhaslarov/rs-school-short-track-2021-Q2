const assert = require('assert');
const deleteDigit = require('../src/05-delete-digit');
it.optional = require('../extensions/it-optional');

describe('05-delete-digit', () => {
  it.optional('should return the maximal number you can obtain by deleting exactly one digit of the given number', () => {
    assert.equal(deleteDigit(152), 52);
    assert.equal(deleteDigit(1001), 101);
    assert.equal(deleteDigit(10), 1);
    assert.equal(deleteDigit(222219), 22229);
    assert.equal(deleteDigit(109), 19);
  });
});
