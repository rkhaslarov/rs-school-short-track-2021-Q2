const assert = require('assert');
const encodeLine = require('../src/11-encode-line');
it.optional = require('../extensions/it-optional');

describe('11-encode-line', () => {
  it.optional('should return encoding version of string', () => {
    assert.equal(encodeLine('aaaatttt'), '4a4t');
    assert.equal(encodeLine('aabbccc'), '2a2b3c');
    assert.equal(encodeLine('abbcca'), 'a2b2ca');
    assert.equal(encodeLine('xyz'), 'xyz');
    assert.equal(encodeLine(''), '');
  });
});
