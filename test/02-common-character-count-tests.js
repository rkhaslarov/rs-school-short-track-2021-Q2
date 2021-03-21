const assert = require('assert');
const getCommonCharacterCount = require('../src/02-common-character-count');
it.optional = require('../extensions/it-optional');

describe('02-common-character-count', () => {
  it.optional('should return the number of common characters between the given strings', () => {
    assert.equal(getCommonCharacterCount('aabcc', 'adcaa'), 3);
    assert.equal(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
    assert.equal(getCommonCharacterCount('abca', 'xyzbac'), 3);
    assert.equal(getCommonCharacterCount('', 'abc'), 0);
    assert.equal(getCommonCharacterCount('a', 'b'), 0);
  });
});
