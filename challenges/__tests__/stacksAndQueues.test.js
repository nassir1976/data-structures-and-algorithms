'use strict';


const abegaz = require('../stack-and-queue/stacksAndQueues.js');

const Stack = abegaz.stack;
const Queue = abegaz.queue;
const Node = abegaz.node;

describe('Testing basic stacks functionality', () => {
  const stack = new Stack;
  expect(stack).toBeTruthy();

  test('If successfully push onto a stack', () => {
    const stack = new Stack;
    stack.push(new Node(1));

    expect(stack.top.value).toEqual(1);
  });

  test('If successfully push multiple values onto a stack', () => {
    const stack = new Stack;
    stack.push(new Node(1));
    stack.push(new Node(2));
    stack.push(new Node(3));

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  test('If successfully pop off the stack', () => {
    const stack = new Stack;
    stack.push(new Node(1));
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });
  test('If successfully pop multiple value off the stack', () => {
    const stack = new Stack;
    stack.push(new Node(1));
    stack.push(new Node(2));
    stack.push(new Node(3));
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });
  test('should return top value when peek is called', () => {
    const stack = new Stack;
    stack.push(new Node(1));
    stack.push(new Node(2));
    expect(stack.peek()).toEqual(2);
  });
  test('If successfully instantiate an empty stack / if pop or peek are called on an empty stack', () => {
    const stack = new Stack;

    expect(stack.peek()).toEqual('empty');
    expect(stack.pop()).toEqual('empty');

  });
});


describe('Testing basic queue functionality', () => {
  test('should instantiate an empty Queue', () => {
    const queue = new Queue;
    expect(queue).toBeTruthy();

  });

  test('If successfully enqueue a single value  into a queue', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));

    expect(queue.front.value).toEqual(1);
  });

  test('If successfully enqueue multiple values into a queue', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));
    queue.enqueue(new Node(2));
    queue.enqueue(new Node(3));

    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
  });

  test('If successfully dequeue a single value out of a queue the expected value', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));
    queue.dequeue();
    expect(queue.dequeue()).toEqual('empty');

  });
  test('If successfully dequeue multiple values off a queue', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));
    queue.enqueue(new Node(2));
    queue.enqueue(new Node(3));
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toEqual('empty');

  });

  test('If successfully peek the front value ,when peek is called ', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));
    queue.enqueue(new Node(2));

    expect(queue.peek()).toEqual(1);
  });

  test('If successfully instantiate an empty QUEUE / if pop or peek are called on an empty queue', () => {
    const queue = new Queue;
    expect(queue.peek()).toEqual('empty');
    expect(queue.dequeue()).toEqual('empty');
  });


});
