/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const inputArr = arr;
  const filteredArr = inputArr.filter((item) => item !== -1).sort((a, b) => a - b);
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] !== -1) {
      const firstItem = filteredArr[0];
      inputArr[i] = firstItem;
      filteredArr.splice(0, 1);
    }
  }
  return inputArr;
}
module.exports = sortByHeight;
