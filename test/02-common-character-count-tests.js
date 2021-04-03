const assert = require('assert');
const getCommonCharacterCount = require('../src/02-common-character-count');
it.optional = require('../extensions/it-optional');

describe('02-common-character-count', () => {
  it.optional('should return the number of common characters between the given strings', () => {
    assert.strictEqual(getCommonCharacterCount('aabcc', 'adcaa'), 3);
    assert.strictEqual(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
    assert.strictEqual(getCommonCharacterCount('abca', 'xyzbac'), 3);
    assert.strictEqual(getCommonCharacterCount('', 'abc'), 0);
    assert.strictEqual(getCommonCharacterCount('a', 'b'), 0);
  });
});
