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
  function findCharactersCount(string) {
    const counter = {};

    for (let i = 0; i < string.length; i++) {
      counter[string[i]] = (string[i] in counter) ? counter[string[i]] + 1 : 1;
    }

    return counter;
  }

  const counter1 = findCharactersCount(s1);
  const counter2 = findCharactersCount(s2);
  let countCommon = 0;
  let length = 0;

  if (Object.keys(counter1).length > Object.keys(counter2).length) {
    length = Object.keys(counter1).length;
  } else {
    length = Object.keys(counter2).length;
  }

  for (let i = 0; i < length; i++) {
    const char = Object.keys(counter1)[i];

    if (char in counter2 && char in counter2) {
      countCommon += (counter1[char] < counter2[char]) ? counter1[char] : counter2[char];
    }
  }

  return countCommon;
}

module.exports = getCommonCharacterCount;
