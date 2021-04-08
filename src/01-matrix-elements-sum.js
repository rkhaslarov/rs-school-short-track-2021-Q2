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
  let sum = 0;
  let isZero = false;

  for(let i = 1; i < matrix.length; i++)
  {
    for(let j = 0; j < matrix[i].length; j++)
    {
      if(matrix[i][j] === 0)
      {
        isZero = true;
        for(let k = i-1; k > -1; k--)
        {
          if(matrix[k][j] !== 0)
          {
            sum += matrix[k][j];
          }
        }
      }
    }
  }
  if(!isZero) {
    for(let i = 0; i < matrix.length; i++)
    {
      matrix[i].forEach(function(value) {
        sum += value;
      });
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
