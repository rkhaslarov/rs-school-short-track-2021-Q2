/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findValueIndex(array, value, left, right) {
  const middleIndex = Math.trunc((left + right) / 2);
  if (right - left === 1) {
    if (array[left] === value) {
      return left;
    }
    return right;
  }
  if (value === array[middleIndex]) {
    return middleIndex;
  }
  if (value < array[middleIndex]) {
    return findValueIndex(array, value, left, middleIndex);
  }
  return findValueIndex(array, value, middleIndex, right);
}
function findIndex(array, value) {
  const valueIndex = findValueIndex(array, value, 0, array.length - 1);
  return valueIndex;
}

module.exports = findIndex;
