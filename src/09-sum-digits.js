/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
let output = 0;
function getSumOfDigits(n) {
  const inputArr = n.toString().split('');
  let result = 0;
  for (let i = 0; i < inputArr.length; i++) {
    result += +inputArr[i];
  }
  if (result > 9) {
    getSumOfDigits(result);
  } else {
    output = result;
  }
  return output;
}
module.exports = getSumOfDigits;
