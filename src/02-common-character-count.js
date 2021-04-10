/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const chars1 = s1.split('');
  const chars2 = s2.split('');

  let commonChars = 0;

  for (let i = 0; i < chars1.length; i++) {
    for (let j = 0; j < chars2.length; j++) {
      if (chars1[i] === chars2[j]) {
        commonChars++;
        chars1.splice(i, 1);
        chars2.splice(j, 1);
        i--;
        break;
      }
    }
  }
  return commonChars;
}

module.exports = getCommonCharacterCount;
