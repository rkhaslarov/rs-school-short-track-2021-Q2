/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const board = [];

  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i].map((item, index, arr) => {
      let bombs = 0;

      if (matrix[i - 1]) {
        if (matrix[i - 1][index - 1]) {
          bombs += 1;
        }

        if (matrix[i - 1][index]) {
          bombs += 1;
        }

        if (matrix[i - 1][index + 1]) {
          bombs += 1;
        }
      }

      if (arr[index - 1]) {
        bombs += 1;
      }

      if (arr[index + 1]) {
        bombs += 1;
      }

      if (matrix[i + 1]) {
        if (matrix[i + 1][index - 1]) {
          bombs += 1;
        }

        if (matrix[i + 1][index]) {
          bombs += 1;
        }

        if (matrix[i + 1][index + 1]) {
          bombs += 1;
        }
      }

      return bombs;
    });

    board.push(line);
  }
  return board;
}

module.exports = minesweeper;
