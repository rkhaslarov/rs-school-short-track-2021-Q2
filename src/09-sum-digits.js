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
function getSumOfDigits(n) {
  const q = n.toString().split('');
  let sum = 0;
  for (let i = 0; i < q.length; i++) {
    sum += Number(q[i]);
    while (sum > 9) {
      const sum1 = sum.toString().split('');
      const sumLength = sum1.length;
      sum = 0;
      for (let m = 0; m < sumLength; m++) {
        sum += Number(sum1[m]);
      }
    }
  }
  return sum;
}

module.exports = getSumOfDigits;
