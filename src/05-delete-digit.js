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
  const digits = [];
  if (n < 10) {
    return n;
  }
  do {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  while (n > 9);
  digits.push(n);
  digits.reverse();

  let minDigit = digits[0];
  digits.forEach((digit) => {
    minDigit = minDigit > digit ? digit : minDigit;
  });
  const minDigitIndex = digits.indexOf(minDigit);
  digits.splice(minDigitIndex, 1);

  return digits.join('');
}

module.exports = deleteDigit;
