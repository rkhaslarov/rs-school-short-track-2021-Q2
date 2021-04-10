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
  if (n < 10) {
    return n;
  }

  const n1 = getNewSum(n);
  return getSumOfDigits(n1);
}

function getNewSum(number) {
  const digits = getDigits(number);
  return digits.reduce((acc, digit) => acc + digit);
}

function getDigits(number) {
  const digits = [];
  do {
    const digit = number % 10;
    number = Math.floor(number / 10);
    digits.push(digit);
  }
  while (number > 9);
  digits.push(number);

  return digits;
}

module.exports = getSumOfDigits;
