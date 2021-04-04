const assert = require('assert');
const encodeLine = require('../src/11-encode-line');
it.optional = require('../extensions/it-optional');

describe('11-encode-line', () => {
  it.optional('should return encoding version of string', () => {
    assert.strictEqual(encodeLine('aaaatttt'), '4a4t');
    assert.strictEqual(encodeLine('aabbccc'), '2a2b3c');
    assert.strictEqual(encodeLine('abbcca'), 'a2b2ca');
    assert.strictEqual(encodeLine('xyz'), 'xyz');
    assert.strictEqual(encodeLine(''), '');
  });
});
