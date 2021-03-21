const assert = require('assert');
const getEmailDomain = require('../src/15-get-email-domain');
it.optional = require('../extensions/it-optional');

describe('15-get-email-domain', () => {
  it.optional('should return domain name of the given email address', () => {
    assert.equal(getEmailDomain('prettyandsimple@example.com'), 'example.com');
    assert.equal(getEmailDomain('someaddress@yandex.ru'), 'yandex.ru');
    assert.equal(getEmailDomain('very.unusual.@.unusual.com@usual.com'), 'usual.com');
    assert.equal(getEmailDomain('admin@mailserver2.ru'), 'mailserver2.ru');
    assert.equal(getEmailDomain('example-indeed@strange-example.com'), 'strange-example.com');
  });
});
