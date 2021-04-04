const assert = require('assert');
const getEmailDomain = require('../src/15-get-email-domain');
it.optional = require('../extensions/it-optional');

describe('15-get-email-domain', () => {
  it.optional('should return domain name of the given email address', () => {
    assert.strictEqual(getEmailDomain('prettyandsimple@example.com'), 'example.com');
    assert.strictEqual(getEmailDomain('someaddress@yandex.ru'), 'yandex.ru');
    assert.strictEqual(getEmailDomain('very.unusual.@.unusual.com@usual.com'), 'usual.com');
    assert.strictEqual(getEmailDomain('admin@mailserver2.ru'), 'mailserver2.ru');
    assert.strictEqual(getEmailDomain('example-indeed@strange-example.com'), 'strange-example.com');
  });
});
