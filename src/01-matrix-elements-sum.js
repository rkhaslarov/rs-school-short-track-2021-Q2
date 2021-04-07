/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let total = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i === 0) {
      total += matrix[i].reduce((sum, item) => sum + item, 0);
    } else {
      total += matrix[i].reduce((sum, item, index) => {
        if (matrix[i - 1][index] === 0) {
          return sum;
        }

        return sum + item;
      }, 0);
    }
  }

  return total;
}

module.exports = getMatrixElementsSum;
