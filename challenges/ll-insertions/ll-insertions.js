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

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      let  currentVal = current.value;
      current = current.next;
      string += `{${currentVal}}->`;
    }
    string += '{null}';
    return string;
  }
  
  append(value) {
    let current = this.head;
    while (current) {
      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedList;
