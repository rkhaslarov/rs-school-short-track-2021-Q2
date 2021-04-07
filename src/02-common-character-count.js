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
  let counter1 = {},
      counter2 = {},
      countCommon = 0;

  findCharactersCount(s1, counter1);
  findCharactersCount(s2, counter2);

  for (let char in counter1) {
    if (char in counter2) {
      countCommon += (counter1[char] < counter2[char]) ? counter1[char] : counter2[char];
    }
  }

  return countCommon;

  function findCharactersCount(string, counter) {
    for (let i = 0; i < string.length; i++) {
      counter[string[i]] = (string[i] in counter) ? counter[string[i]] + 1 : 1;
    }
  }
}

module.exports = getCommonCharacterCount;
