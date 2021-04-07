const proxyquire = require('proxyquire');
const sinon = require('sinon');
const assert = require('assert');
it.optional = require('../extensions/it-optional');
const ListNode = require('../extensions/list-node');

describe('14-queue', () => {
  const sandbox = sinon.createSandbox();
  const ListNodeSpy = sandbox.spy(ListNode);
  const Queue = proxyquire('../src/14-queue', {
    '../extensions/list-node': ListNodeSpy,
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
    assert.strictEqual(ListNodeSpy.called, true);
  });
});
