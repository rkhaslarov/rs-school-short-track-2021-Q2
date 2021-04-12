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
  const q = n.toString().split('');
  const p = n.toString().split('');
  const w = q.sort((a, b) => a - b);
  const r = w[0];
  let x = 0;
  let v = 0;
  let m = 0;
  for (let i = 0; i < q.length; i++) {
    if (p[i] === r) {
      x = p.slice(0, i).join('');
      v = p.slice(i + 1, p.length).join('');
      m = x + v;
    }
  }
  return Number(m);
}

module.exports = deleteDigit;
