const assert = require('assert');
const getMatrixElementsSum = require('../src/06-mac-address');
it.optional = require('../extensions/it-optional');

describe('06-mac-address', () => {
  it.optional('should check if a given string corresponds to MAC-48 address or not', () => {
    assert.strictEqual(getMatrixElementsSum('00-1B-63-84-45-E6'), true);
    assert.strictEqual(getMatrixElementsSum('Z1-1B-63-84-45-E6'), false);
    assert.strictEqual(getMatrixElementsSum('not a MAC-48 address'), false);
    assert.strictEqual(getMatrixElementsSum('FF-FF-FF-FF-FF-FF'), true);
    assert.strictEqual(getMatrixElementsSum('G0-00-00-00-00-00'), false);
  });
});
