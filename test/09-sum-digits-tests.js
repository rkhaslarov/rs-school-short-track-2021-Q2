const assert = require('assert');
const getSumOfDigits = require('../src/09-sum-digits');
it.optional = require('../extensions/it-optional');

describe('09-sum-digits', () => {
  it.optional('should return the sum of digits', () => {
    assert.equal(getSumOfDigits(91), 1);
    assert.equal(getSumOfDigits(100), 1);
    assert.equal(getSumOfDigits(35), 8);
    assert.equal(getSumOfDigits(99), 9);
    assert.equal(getSumOfDigits(123), 6);
  });
});
