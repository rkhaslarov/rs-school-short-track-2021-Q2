function testOptional(title, fn, isAsyncTest) {
  if (isAsyncTest) {
    return it(title, function test(done) {
      try {
        fn.call(this, done);
      } catch (err) {
        if (err.message.includes('Not implemented')) {
          this.test.skip();
        } else {
          throw err;
        }
      }
    });
  }

  return it(title, function test() {
    try {
      fn.call(this);
    } catch (err) {
      if (err.message.includes('Not implemented')) {
        this.test.skip();
      } else {
        throw err;
      }
    }
  });
}

module.exports = testOptional;
