const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = {};
  }

  get size() {
    let size = 1;

    while (this.list.next !== null) {
      size += 1;
    }

    return size;
  }

  enqueue(element) {
    const node = new ListNode(element);

    if (this.list.value === undefined) {
      this.list = node;

      return true;
    }

    if (this.list.next === null) {
      this.list.next = node;
    } else {
      let lastNode = this.list.next;

      while (lastNode.next != null) {
        lastNode = lastNode.next;
      }

      lastNode.next = node;
    }
  }

  dequeue() {
    const topNode = this.list.value;

    if (this.list.next === null) {
      this.list = {
        value: null,
      };
    } else {
      this.list = this.list.next;
    }

    return topNode;
  }
}

module.exports = Queue;
