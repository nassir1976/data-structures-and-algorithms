'use strict';


const abegaz = require('../queueWithStacks/queue-with-stacks.js');


const PseudoQueue = abegaz.queue;
const Node = abegaz.node;



describe('Testing Psedoqueue', () => {
  test('Shoud add values to the psedoqueue', () => {
    const pseudoQueue = new PseudoQueue;
    pseudoQueue.enqueue(new Node(20));
    pseudoQueue.enqueue (new Node(15));
    pseudoQueue.enqueue (new Node(10));
    pseudoQueue.enqueue (new Node(5));
    expect(pseudoQueue.rear.top.value).toEqual(5);

  });

});

describe('Testing Psedoqueue', () => {
  test('Shoud remove the first  values from the psedoqueue', () => {
    const pseudoQueue = new PseudoQueue;
    pseudoQueue.enqueue (new Node(20));
    pseudoQueue.enqueue (new Node(15));
    pseudoQueue.enqueue (new Node(10));
    pseudoQueue.enqueue (new Node(5));
    expect(pseudoQueue.dequeue()).toEqual(20);

  });

});

