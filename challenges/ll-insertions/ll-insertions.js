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
      let currentVal = current.value;
      current = current.next;
      string += `{${currentVal}}->`;
    }
    string += '{null}';
    return string;
  }

  //===== code challenge 06====


  //add a new node with the given value to the end of the list
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
  //add a new node with the given newvalue immidiately before the first value

  insertBefore(val, newvalue) {
    let current = this.head;
    let newNode = new Node(newvalue);
    while (current.next !== null) {
      if (current.value === val) {
        newNode.next = current;
      } else if (current.next.value === val) {
        let x = current.next;
        current.next = newNode;
        newNode.next = x;
        return;
      }
      current = current.next;
    }

  }
  //add a new node with the given new value  immidiately after the first value node

  insertAfter(val, newvalue) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        let newNode = new Node(newvalue);
        let x = current.next;
        current.next = newNode;
        newNode.next = x;
        return;
      }
      current = current.next;
    }

  }



}

module.exports = LinkedList;
