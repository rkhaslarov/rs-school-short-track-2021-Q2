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
  let number = n;
  if (number < 10) {
    return number;
  }
  do {
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }
  while (number > 9);
  digits.push(number);
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
