const assert = require('assert');
const getSumOfDigits = require('../src/09-sum-digits');
it.optional = require('../extensions/it-optional');

describe('09-sum-digits', () => {
  it.optional('should return the sum of digits', () => {
    assert.strictEqual(getSumOfDigits(91), 1);
    assert.strictEqual(getSumOfDigits(100), 1);
    assert.strictEqual(getSumOfDigits(35), 8);
    assert.strictEqual(getSumOfDigits(99), 9);
    assert.strictEqual(getSumOfDigits(123), 6);
  });
});
