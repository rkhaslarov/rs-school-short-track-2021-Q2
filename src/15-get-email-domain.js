/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const t = email.match(/@/g).length;
  const q = email.search(/@/);
  const w = email.lastIndexOf('@');
  let e = 0;
  if (t === 1) {
    e = email.slice(q + 1);
  } else {
    e = email.slice(w + 1);
  }
  return e;
}

module.exports = getEmailDomain;
