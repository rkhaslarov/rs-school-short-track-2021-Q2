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
  const arr = str.split('');
  let acc = {};
  let encodedLine = '';

  for (let i = 0; i < arr.length; i++) {
    const prev = arr[i - 1];
    const cur = arr[i];

    if (i === 0 || cur === prev || cur in acc) {
      acc[cur] = (acc[cur]) ? acc[cur] + 1 : 1;
    }

    if ((cur !== prev && i !== 0) || i === arr.length) {
      acc[prev] = (acc[prev] === 1) ? '' : acc[prev];
      encodedLine += `${acc[prev]}${Object.keys(acc)[0]}`;
      acc = {};
      acc[cur] = (acc[cur]) ? acc[cur] + 1 : 1;
    }

    if (i === arr.length - 1) {
      acc[cur] = (acc[cur] === 1) ? '' : acc[cur];
      encodedLine += `${acc[cur]}${Object.keys(acc)[0]}`;
    }
  }

  return encodedLine;
}

module.exports = encodeLine;
