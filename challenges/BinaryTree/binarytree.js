'use strict';

// const Node = require('./node.js');

class Node {

  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    // this.next = null; // this would only be used on LL/Stack/Q
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let array = [];
    const preOrderHelper = (node) => {
      array.push(node.value);
      if (node.left) {
        preOrderHelper(node.left);
      }
      if (node.right) {
        preOrderHelper(node.right);
      }
    };

    let current = this.root;
    preOrderHelper(current);
    return array;
  }
  postOrder() {
    let array = [];
    const postOrderHelper = (node) => {
      if (node.left) {
        postOrderHelper(node.left);
      }
      if (node.right) {
        postOrderHelper(node.right);
      }
      array.push(node.value);
    };

    let current = this.root;
    postOrderHelper(current);
    return array;
  }

  inOrder() {
    let array = [];
    const inOrderHelper = (node) => {
      if (node.left) {
        inOrderHelper(node.left);
      }
      array.push(node.value);
      if (node.right) {
        inOrderHelper(node.right);
      }
    };

    let current = this.root;
    inOrderHelper(current);
    return array;
  }
 // =========== code challenges 16===========

  findMaximumValue() {
    let max = 0;
    const preOrderHelper = (node) => {
      if (node.value > max) {
        max = node.value;

      }
      if (node.left) {
        preOrderHelper(node.left);
      }
      if (node.right) {
        preOrderHelper(node.right);
      }

    };
    let current = this.root;
    preOrderHelper(current);
    return max;
  }
 // =========== code challenges 17===========
  breadthFirst() {
    let current = null;
    let queue = [];
    let treeArray = [];
    queue.unshift(this.root);
    while (queue.length) {
      current = queue.pop();
      treeArray.push(current.value);
      if (current.left) {
        queue.unshift(current.left);
      }
      if (current.right) {
        queue.unshift(current.right);
      }
    }
    return treeArray;
  }
}





class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    let node = new Node(value);
    let current = this.root;
    const helper = (current) => {
      if (current.value > value && current.left === null) {
        node.left = current.left;
        node.right = current.right;
        current.left = node;
      }
      if (current.value > value) {
        helper(current.left);
      } if (current.value < value && current.right !== null) {
        node.left = current.left;
        node.right = current.right;
        current.right = node;
      } if (current.value < value) {
        helper(current.right);
      }
    };
    helper(current);
  }
  contains(value) {
    let current = this.root;
    while (current !== null && current.value !== value) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }
    if (!current) {
      return false;
    } else {
      return true;
    }
  }
}
module.exports = {
  tree: BinaryTree,
  add: BinarySearchTree,
  node: Node

};




