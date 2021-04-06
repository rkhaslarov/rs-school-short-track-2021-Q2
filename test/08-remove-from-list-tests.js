const assert = require('assert');
const List = require('../extensions/list-helpers');
const removeKFromList = require('../src/08-remove-from-list');
it.optional = require('../extensions/it-optional');

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = List.createNode(cur);
      node.next = acc;
      return node;
    }

    return List.createNode(cur);
  }, null);
}

describe('08-remove-from-list', () => {
  it.optional('should return the list without values equal to k', () => {
    const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
    const expected = convertArrayToList([1, 2, 4, 5]);
    assert.deepEqual(removeKFromList(initial, 3), expected);
  });
});
