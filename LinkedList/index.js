class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
class Llist {
  constructor() {
    this.head = new Node('head')
  }

  find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  dispList() {
    let current = this.head
    while(current !== null) {
      console.log(current)
      current = current.next
    }
  }
}
module.exports = { Node, Llist }