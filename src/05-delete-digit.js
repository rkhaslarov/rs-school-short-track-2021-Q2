/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const input = String(n).split('');
  let base = 0;
  for (let i = 0; i < String(n).length; i++) {
    const newArr = input.slice();
    let current = 0;
    newArr.splice(i, 1);
    current = newArr.slice().join('');
    if (current > base) {
      base = current;
    }
  }
  return +base;
}

module.exports = deleteDigit;
