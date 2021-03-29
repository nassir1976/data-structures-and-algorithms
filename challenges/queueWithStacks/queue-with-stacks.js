'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }

  // push to the top of the stack

  push(node) {
    if (this.isEmpty()) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
    }

  }

  // pop off the top of the stack
  pop() {
    if (this.isEmpty()) {
      return 'empty';

    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;

  }
  // show me the top of the stack
  peek() {
    if (this.top) {
      return this.top.value;

    }
    return ('empty');
  }

  isEmpty() {
    return this.top === null;
  }



}

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();

  }

  enqueue(node) {
    // if we just added the first item, set it as the front and the rear
    // if we added something other than the first item, it automatically gets added to the rear (FIFO)
    this.rear.push(node);


  }

  // if we removed the last item in the queue, reset the front/rear to null

  // otherwise, set the front and rear to their actual positions
  dequeue() {
    if (this.front.isEmpty()) {
      while (!this.rear.isEmpty()) {
        this.front.push(this.rear.pop());
      }
    }

    return this.front.pop();
  }


}

module.exports = {
  stack: Stack,
  queue: PseudoQueue,
  node: Node,
};

