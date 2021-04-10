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
  let firstNumberIndex = 0;
  let lastNumberIndex = array.length - 1;
  let m;
  let stop = 'false';
  while (stop === 'false' && firstNumberIndex <= lastNumberIndex) {
    m = Math.floor(lastNumberIndex + firstNumberIndex / 2);
    if (array[m] === value) {
      stop = 'true';
    } else if (array[m] > value) {
      lastNumberIndex = m - 1;
    } else {
      firstNumberIndex = m + 1;
    }
  }
  return m;
}
module.exports = findIndex;
