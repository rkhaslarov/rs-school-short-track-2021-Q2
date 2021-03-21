const assert = require('assert');
const getMatrixElementsSum = require('../src/06-mac-address');
it.optional = require('../extensions/it-optional');

describe('06-mac-address', () => {
  it.optional('should check if a given string corresponds to MAC-48 address or not', () => {
    assert.equal(getMatrixElementsSum('00-1B-63-84-45-E6'), true);
    assert.equal(getMatrixElementsSum('Z1-1B-63-84-45-E6'), false);
    assert.equal(getMatrixElementsSum('not a MAC-48 address'), false);
    assert.equal(getMatrixElementsSum('FF-FF-FF-FF-FF-FF'), true);
    assert.equal(getMatrixElementsSum('G0-00-00-00-00-00'), false);
  });
});
