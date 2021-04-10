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
  if(n < 10)
  {
    return n;
  }
  else
  {
      return getSumDigits(n);
  }
}

function getSumDigits(number) {
  let digits = getArrayDigits(n);
  return digits.reduce((acc, digit) => acc + digit);
}

function getArrayDigits(number) {
  let arrayDigits = [];
  do
  {
    arrayDigits.push(n % 10);
    n = Math.floor(n / 10);
  }
  while(n > 9);
  arrayDigits.push(n);
  arrayDigits.reverse();

  return arrayDigits;
}

module.exports = getSumOfDigits;
