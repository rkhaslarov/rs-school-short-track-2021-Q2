/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return '';
  }
  let resultStr = '';
  const chars = str.split('');
  chars.sort();
  for (let i = 0; i < chars.length; i++) {
    let amountChars = 1;
    for (let j = i + 1; j < chars.length; j) {
      if (chars[i] === chars[j]) {
        amountChars++;
        chars.splice(j, 1);
      } else {
        break;
      }
    }
    const resultAmount = amountChars > 1 ? amountChars : '';
    const resultChar = `${resultAmount}${chars[i]}`;
    resultStr += resultChar;
  }
  return resultStr;
}

module.exports = encodeLine;
