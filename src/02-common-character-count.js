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
  let base;
  let second;
  let count = 0;
  if (s1.length > s2.length) {
    base = s1.split('');
    second = s2.split('');
  } else {
    base = s2.split('');
    second = s1.split('');
  }
  for (let j = 0; j < base.length; j++) {
    for (let i = 0; i < second.length; i++) {
      if (base[j] === second[i]) {
        second.splice(i, 1);
        count++;
        break;
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
