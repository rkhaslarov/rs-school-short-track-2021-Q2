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
  for(let i = 0; i < matrix.length; i++)
  {
    for(let j = 0; j < matrix[i].length; j++)
    {
      matrix[i][j] = matrix[i][j] === false ? 0 : 1;
    }
  }

  let gameField = [];
  for(let i = 0; i < matrix.length; i++)
  {
    gameField[i] = [];
    for(let j = 0; j < matrix[i].length; j++)
    {
      if(matrix[i][j] === 1) {
        gameField[i].push(1);
      } else {
        if(i === 0) {
          let amountFromCurrent = getAmountFromCurrentLine(matrix, i, j);
          let amountFromNext = getAmountFromNextLine(matrix, i, j);
          let amountMines = amountFromCurrent + amountFromNext;
          gameField[i].push(amountMines);
        } else if(i === matrix.length - 1) {
          let amountFromCurrent = getAmountFromCurrentLine(matrix, i, j);
          let amountFromPrevious = getAmountFromPreviousLine(matrix, i, j);
          let amountMines = amountFromCurrent + amountFromPrevious;
          gameField[i].push(amountMines);
        } else {
          let amountFromCurrent = getAmountFromCurrentLine(matrix, i, j);
          let amountFromPrevious = getAmountFromPreviousLine(matrix, i, j);
          let amountFromNext = getAmountFromNextLine(matrix, i, j);
          let amountMines = amountFromCurrent + amountFromPrevious + amountFromNext;
          gameField[i].push(amountMines);
        }
      }
    }
  }
  return gameField;
}

function getAmountFromCurrentLine(matrix, i, j) {
  let amountMines;
  if(j === 0) {
    amountMines = matrix[i][j] + matrix[i][j+1];
  } else if(j === matrix[i].length - 1) {
    amountMines = matrix[i][j] + matrix[i][j-1];
  } else {
    amountMines = matrix[i][j] + matrix[i][j-1] + matrix[i][j+1];
  }
  return amountMines;
}
function getAmountFromPreviousLine(matrix, i, j) {
  let amountMines;
  if(j === 0) {
    amountMines = matrix[i-1][j] + matrix[i-1][j+1];
  } else if(j === matrix[i].length - 1) {
    amountMines = matrix[i-1][j] + matrix[i-1][j-1];
  } else {
    amountMines = matrix[i-1][j] + matrix[i-1][j-1] + matrix[i-1][j+1];
  }
  return amountMines;
}
function getAmountFromNextLine(matrix, i, j) {
  let amountMines;
  if(j === 0) {
    amountMines = matrix[i+1][j] + matrix[i+1][j+1];
  } else if(j === matrix[i].length - 1) {
    amountMines = matrix[i+1][j] + matrix[i+1][j-1];
  } else {
    amountMines = matrix[i+1][j] + matrix[i+1][j+1] + matrix[i+1][j-1];
  }
  return amountMines;
}

module.exports = minesweeper;
