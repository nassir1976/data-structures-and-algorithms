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

  kthFromEnd(k) {
    let llArray = [];
    let current = this.head;
    while (current) {
      llArray.push(current.value);
      current = current.next;
    }
    llArray.reverse();
    if (k >= llArray.length || k < 0) {
      return 'Invalid Input Number';
    } else {
      return llArray[k];
    }
  }






}
function zipList(ll1, ll2) {
  const zippedList = new LinkedList();
  ll1 = ll1.head;
  ll2 = ll2.head;
  zippedList.head = new Node(ll1.value);
  ll1 = ll1.next;

  while (ll1 || ll2) {
    if (ll1 && ll2) {
      zippedList.append(ll2.value);
      zippedList.append(ll1.value);
      ll2 = ll2.next;
      ll1 = ll1.next;
    }
    else if (!ll1 && ll2) {
      zippedList.append(ll2.value);
      ll2 = ll2.next;
    }
    else if (ll1 && !ll2) {
      zippedList.append(ll1.value);
      ll1 = ll1.next;
    }
    else {
      return;
    }
  }
  zippedList.toString();
  //   console.log(zippedList);
  return zippedList;

}



module.exports = LinkedList;
