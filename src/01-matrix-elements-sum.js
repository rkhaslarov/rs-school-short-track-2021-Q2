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
  const element = 0;
  let sum = 0;
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
    let idx = matrix[i].indexOf(element);
    while (idx !== -1) {
      if (i === matrix.length - 1) {
        break;
      }
      result += matrix[i + 1][idx];
      idx = matrix[i].indexOf(element, idx + 1);
    }
  }
  return sum - result;
}

module.exports = getMatrixElementsSum;
