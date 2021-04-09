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
function findIndex(array, value) {
  const searchArea = [0, array.length];
  let currentIndex = Math.floor(array.length / 2);

  while (array[currentIndex] !== value) {
    if (value < array[currentIndex]) {
      searchArea[1] = currentIndex;
      currentIndex = Math.floor(currentIndex / 2);
    } else {
      searchArea[0] = currentIndex;
      currentIndex = Math.floor((searchArea[1] - searchArea[0]) / 2 + searchArea[0]);
    }
  }

  return currentIndex;
}

module.exports = findIndex;
