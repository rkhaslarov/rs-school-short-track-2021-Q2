/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsCounter = {};

  for (let i = 0; i < domains.length; i++) {
    const subDomains = domains[i].split('.').reverse();

    subDomains.reduce((acc, item) => {
      const curr = `.${item}`;

      domainsCounter[acc + curr] = (domainsCounter[acc + curr]) ? domainsCounter[acc + curr] + 1 : 1;

      return acc + curr;
    }, '');
  }

  return domainsCounter;
}

module.exports = getDNSStats;
