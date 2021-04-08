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
  let sortedArray = [];

  arr.forEach(function(currentValue) {
    if(currentValue !== -1)
    {
      sortedArray.push(currentValue);
    }
  });

  sortedArray.sort((val1, val2) => val1 - val2).reverse();

  return arr.map(currentValue => currentValue !== -1 ? sortedArray.pop() : currentValue);
}

module.exports = sortByHeight;
