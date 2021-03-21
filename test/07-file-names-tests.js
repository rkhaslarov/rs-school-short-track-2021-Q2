const assert = require('assert');
const renameFiles = require('../src/07-file-names');
it.optional = require('../extensions/it-optional');

describe('07-file-names', () => {
  it.optional('should return an array of names that will be given to the files', () => {
    assert.deepEqual(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
    assert.deepEqual(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']), ['a', 'b', 'cd', 'b ', 'a(3)']);
    assert.deepEqual(renameFiles([]), []);
  });
});
