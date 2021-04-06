function ListNode(x) {
  this.value = x;
  this.next = null;
}

module.exports = {
  createNode: (value) => new ListNode(value),
};
