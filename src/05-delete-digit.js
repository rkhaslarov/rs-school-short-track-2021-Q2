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
  const temp = n.toString().split('');
  const numbers = [];

  for (let i = 0; i < temp.length; i++) {
    const newArr = temp.filter((item, index) => {
      if (index !== i) {
        return true;
      }

      return false;
    });
    numbers.push(+(newArr.join('')));
  }

  return numbers.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
