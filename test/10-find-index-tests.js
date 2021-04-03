const sinon = require('sinon');
const assert = require('assert');
const findIndex = require('../src/10-find-index');
it.optional = require('../extensions/it-optional');

describe('10-find-element', () => {
  const sandbox = sinon.createSandbox();
  const bigInput = Array.from(Array(100000000).keys());
  const _0x141a = ['floor', '695021BVSukb', '198781xwUXfG', '232594dvEIsK', '1aOxxne', '1gXzfNc', 'hrtime', '327106HPrCkc', '2419563XEJEyk', '1APstZR', '2LxDLoF', '785372Ocitip', '172397aTjEks', 'length']; const _0x3f1e = function (_0x226e2c, _0x9b5d0d) { _0x226e2c = _0x226e2c - 0x1b4; let _0x141ab2 = _0x141a[_0x226e2c]; return _0x141ab2; }; (function (_0x105999, _0xb45e71) { const _0x5320f3 = _0x3f1e; while (!![]) { try { const _0x29e549 = parseInt(_0x5320f3(0x1bd)) * -parseInt(_0x5320f3(0x1ba)) + parseInt(_0x5320f3(0x1c1)) + -parseInt(_0x5320f3(0x1c0)) * parseInt(_0x5320f3(0x1b6)) + parseInt(_0x5320f3(0x1bb)) * -parseInt(_0x5320f3(0x1b4)) + parseInt(_0x5320f3(0x1b8)) + -parseInt(_0x5320f3(0x1bc)) + parseInt(_0x5320f3(0x1b9)) * parseInt(_0x5320f3(0x1b5)); if (_0x29e549 === _0xb45e71) break; else _0x105999['push'](_0x105999['shift']()); } catch (_0x17eda5) { _0x105999['push'](_0x105999['shift']()); } } }(_0x141a, 0xca050)); function getTimeout(_0x24dcd1) { const _0x246cff = _0x3f1e; function _0x58530b(_0x5512e3) { const _0x3c7c7d = _0x3f1e; let _0x4f8a18, _0x4d854a = 0x0, _0xf28332 = _0x24dcd1[_0x3c7c7d(0x1be)] - 0x1; while (_0x4d854a <= _0xf28332) { _0x4f8a18 = Math[_0x3c7c7d(0x1bf)]((_0x4d854a + _0xf28332) / 0x2); if (_0x24dcd1[_0x4f8a18] === _0x5512e3) return _0x4f8a18; _0x24dcd1[_0x4f8a18] < _0x5512e3 ? _0x4d854a = _0x4f8a18 + 0x1 : _0xf28332 = _0x4f8a18 - 0x1; } return -0x1; } const _0x5a850b = process[_0x246cff(0x1b7)](); _0x58530b(0x5f5e0ff); const _0x443357 = process['hrtime'](_0x5a850b); return Math[_0x246cff(0x1bf)](_0x443357[0x0] * 0x3e8 + _0x443357[0x1] / 0xf4240) + 0x14; }  // eslint-disable-line

  afterEach(() => {
    sandbox.restore();
  });

  it.optional('should return index of an element from sorted array with a given value', () => {
    assert.strictEqual(findIndex([1, 2, 3, 4, 5], 5), 4);
    assert.strictEqual(findIndex([1, 2, 3, 4, 5], 3), 2);
    assert.strictEqual(findIndex([1, 2, 3, 4, 5], 1), 0);
    assert.strictEqual(findIndex([5, 6, 7], 7), 2);
    assert.strictEqual(findIndex([5, 6, 7], 5), 0);
  });

  it.optional('should return index of an element from sorted array with a given value', () => {
    findIndex(bigInput, 99999999);
  }).timeout(getTimeout(bigInput));

  it.optional('should not call built-in findIndex method', () => {
    const stub = sandbox.stub(Array.prototype, 'findIndex');
    findIndex([1, 2, 3, 4, 5], 5);
    assert.strictEqual(stub.called, false);
  });

  it.optional('should not call built-in indexOf method', () => {
    const stub = sandbox.stub(Array.prototype, 'indexOf');
    findIndex([1, 2, 3, 4, 5], 5);
    assert.strictEqual(stub.called, false);
  });

  it.optional('should not call built-in lastIndexOf method', () => {
    const stub = sandbox.stub(Array.prototype, 'lastIndexOf');
    findIndex([1, 2, 3, 4, 5], 5);
    assert.strictEqual(stub.called, false);
  });
});
