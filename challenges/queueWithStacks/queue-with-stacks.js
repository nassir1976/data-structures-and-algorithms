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
    if (!this.top) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
      return;
    }

  }

  // pop off the top of the stack
  pop() {
    if (!this.top) {
      return 'empty';

    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp;

  }
  // show me the top of the stack
  peek() {
    if (this.top) {
      return this.top.value;

    }
    return ('empty');
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
    return this;


  }

  // if we removed the last item in the queue, reset the front/rear to null

  // otherwise, set the front and rear to their actual positions
  dequeue() {
    while (this.rear.top) {
      let temp = this.rear.pop();
      this.front.push(temp);
    }
    let final = this.front.pop();
    while (this.front.top) {
      let temp = this.front.pop();
      this.rear.push(temp);
    }


    return final.value;
  }
}






module.exports = {

  queue: PseudoQueue,
  node: Node,
};

