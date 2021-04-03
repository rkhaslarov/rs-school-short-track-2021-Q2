const assert = require('assert');
const Queue = require('../src/14-queue');
it.optional = require('../extensions/it-optional');

describe('14-queue', () => {
  it.optional('should create a Queue with the methods', () => {
    const queue = new Queue();
    assert.doesNotThrow(() => queue.enqueue(5));
    assert.doesNotThrow(() => queue.enqueue(6));
    assert.doesNotThrow(() => queue.enqueue(7));
    assert.strictEqual(queue.dequeue(), 5);
    assert.strictEqual(queue.dequeue(), 6);
  });
});
