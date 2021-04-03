const assert = require('assert');
const Stack = require('../src/13-stack');
it.optional = require('../extensions/it-optional');

describe('13-stack', () => {
  it.optional('should create a Stack with the methods', () => {
    const stack = new Stack();
    assert.doesNotThrow(() => stack.push(5));
    assert.doesNotThrow(() => stack.push(6));
    assert.doesNotThrow(() => stack.push(7));
    assert.strictEqual(stack.peek(), 7);
    assert.strictEqual(stack.pop(), 7);
    assert.strictEqual(stack.peek(), 6);
  });
});
