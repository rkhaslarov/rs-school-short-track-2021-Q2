const assert = require('assert');
const minesweeper = require('../src/04-mine-sweeper');
it.optional = require('../extensions/it-optional');

describe('04-mine-sweeper', () => {
  it.optional('should return minesweeper game setup', () => {
    assert.deepEqual(
      minesweeper([
        [true, false, false],
        [false, true, false],
        [false, false, false],
      ]),
      [
        [1, 2, 1],
        [2, 1, 1],
        [1, 1, 1],
      ],
    );

    assert.deepEqual(
      minesweeper([
        [false, false, false],
        [false, false, false],
      ]),
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
    );
  });
});
