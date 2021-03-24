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

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;

  }

  enqueue(node) {
    // if we just added the first item, set it as the front and the rear
    // if we added something other than the first item, it automatically gets added to the rear (FIFO)
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;

    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  // if we removed the last item in the queue, reset the front/rear to null

  // otherwise, set the front and rear to their actual positions
  dequeue() {
    if (this.isEmpty()) {
      return ('empty');
    }
    let temp = this.front;
    this.front = temp.next;
    return temp.value;
  }
  peek() {
    if (this.front) {
      return this.front.value;
    }
    return 'empty';
  }
  isEmpty() {
    return this.front === null;
  }


}

module.exports = {
  stack: Stack,
  queue: Queue,
  node: Node,
};

// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);

// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

// console.log('stack', stack);


// ===============//


// let q = new Queue();

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.enqueue(40);
// q.enqueue(50);

// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();

// console.log(q)