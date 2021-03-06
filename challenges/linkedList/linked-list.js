'use strict';


const Node = require('./node.js');
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let current = this.head;
    let newNode = new Node(value);
    if (!current) {
      this.head = newNode;
    } else {
      newNode.next = current;
      this.head = newNode;
    }

  }
  includes(value) {
    let current = this.head;
    while (current) {
      if (value === current.value) { return true; }
      else if (current.next === null) { return false; }
      else { current = current.next; }
    }
  }


}

module.exports = LinkedList;
