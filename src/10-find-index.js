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
function findValueIndex(array, value, currentIndex) {
  if (value === array[currentIndex]) {
    return currentIndex;
  }
  const middelValue = Math.floor(currentIndex / 2);
  let nextIndex;
  if (value < array[currentIndex]) {
    nextIndex = currentIndex - middelValue;
  } else {
    nextIndex = currentIndex + middelValue;
  }
  return findValueIndex(array, value, nextIndex);
}
function findIndex(array, value) {
  const middlePosition = Math.floor(array.length / 2);
  const valueIndex = findValueIndex(array, value, middlePosition);
  return valueIndex;
}

module.exports = findIndex;
