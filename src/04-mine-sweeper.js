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
// function getAmountFromCurrentLine(matrix, i, j) {
//   let amountMines;
//   if (j === 0) {
//     amountMines = matrix[i][j] + matrix[i][j + 1];
//   } else if (j === matrix[i].length - 1) {
//     amountMines = matrix[i][j] + matrix[i][j - 1];
//   } else {
//     amountMines = matrix[i][j] + matrix[i][j - 1] + matrix[i][j + 1];
//   }
//   return amountMines;
// }
// function getAmountFromPreviousLine(matrix, i, j) {
//   let amountMines;
//   if (j === 0) {
//     amountMines = matrix[i - 1][j] + matrix[i - 1][j + 1];
//   } else if (j === matrix[i].length - 1) {
//     amountMines = matrix[i - 1][j] + matrix[i - 1][j - 1];
//   } else {
//     amountMines = matrix[i - 1][j] + matrix[i - 1][j - 1] + matrix[i - 1][j + 1];
//   }
//   return amountMines;
// }
// function getAmountFromNextLine(matrix, i, j) {
//   let amountMines;
//   if (j === 0) {
//     amountMines = matrix[i + 1][j] + matrix[i + 1][j + 1];
//   } else if (j === matrix[i].length - 1) {
//     amountMines = matrix[i + 1][j] + matrix[i + 1][j - 1];
//   } else {
//     amountMines = matrix[i + 1][j] + matrix[i + 1][j + 1] + matrix[i + 1][j - 1];
//   }
//   return amountMines;
// }
// function minesweeper(matrix) {
//   const numberMatrix = [];
//   for (let i = 0; i < matrix.length; i++) {
//     numberMatrix[i] = [];
//     for (let j = 0; j < matrix[i].length; j++) {
//       const value = matrix[i][j] === false ? 0 : 1;
//       numberMatrix[i].push(value);
//     }
//   }
//   const gameField = [];
//   for (let i = 0; i < matrix.length; i++) {
//     gameField[i] = [];
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === 1) {
//         gameField[i].push(1);
//       } else if (i === 0) {
//         const amountFromCurrent = getAmountFromCurrentLine(matrix, i, j);
//         const amountFromNext = getAmountFromNextLine(matrix, i, j);
//         const amountMines = amountFromCurrent + amountFromNext;
//         gameField[i].push(amountMines);
//       } else if (i === matrix.length - 1) {
//         const amountFromCurrent = getAmountFromCurrentLine(matrix, i, j);
//         const amountFromPrevious = getAmountFromPreviousLine(matrix, i, j);
//         const amountMines = amountFromCurrent + amountFromPrevious;
//         gameField[i].push(amountMines);
//       } else {
//         const amountFromCurrent = getAmountFromCurrentLine(matrix, i, j);
//         const amountFromPrevious = getAmountFromPreviousLine(matrix, i, j);
//         const amountFromNext = getAmountFromNextLine(matrix, i, j);
//         const amountMines = amountFromCurrent + amountFromPrevious + amountFromNext;
//         gameField[i].push(amountMines);
//       }
//     }
//   }
//   return gameField;
// }
function getNumberOfMines(matrix, i, j) {
  const startI = i === 0 ? i : i - 1;
  const startJ = j === 0 ? j : j - 1;
  const endI = i === matrix.length - 1 ? i : i + 1;
  const endJ = j === matrix[0].length - 1 ? j : j + 1;
  let res = 0;
  for (let x = startI; x <= endI; x++) {
    for (let y = startJ; y <= endJ; y++) {
      if (matrix[x][y]) {
        res++;
      }
    }
  }
  return res;
}

function minesweeper(matrix) {
  const gameField = [];
  for (let i = 0; i < matrix.length; i++) {
    gameField[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        gameField[i].push(1);
      } else {
        const value = getNumberOfMines(matrix, i, j);
        gameField[i].push(value);
      }
    }
  }
  return gameField;
}

module.exports = minesweeper;
