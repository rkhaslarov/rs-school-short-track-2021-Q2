const proxyquire = require('proxyquire');
const sinon = require('sinon');
const assert = require('assert');
it.optional = require('../extensions/it-optional');

describe('14-queue', () => {
  const sandbox = sinon.createSandbox();
  const ListNodeStub = sandbox.stub();
  const Queue = proxyquire('../src/14-queue', {
    '../extensions/list-node': ListNodeStub,
  });

  afterEach(() => {
    sandbox.restore();
  });

  it.optional('should create a Queue with the methods', () => {
    const queue = new Queue();
    assert.doesNotThrow(() => queue.enqueue(5));
    assert.doesNotThrow(() => queue.enqueue(6));
    assert.doesNotThrow(() => queue.enqueue(7));
    assert.strictEqual(queue.dequeue(), 5);
    assert.strictEqual(queue.dequeue(), 6);
  });

  it.optional('should use a ListNode within the methods', () => {
    const queue = new Queue();
    assert.doesNotThrow(() => queue.enqueue(5));
    assert.strictEqual(queue.dequeue(), 5);
    assert.strictEqual(ListNodeStub.called, true);
  });
});
