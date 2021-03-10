
'use strct';

const Node = require('../linkedList/node.js');
const LL = require('../linkedList/linked-list.js');

// JEST - RUNNER / ASSERTION LIBRARY -> describe, it, expect

// describe -> test suite -> usually a module
describe('NODE CLASS', () => {

  // it -> an individual test -> you can also use test()
  it('can create a new node', () => {
    let value = 'test value';
    let node = new Node(value);

    // expect -> assertions

    // check the node value we just created
    expect(node.value).toEqual(value);

    // ensure our next is null, cause there is only one node
    expect(node.next).toBeNull();
  });
});




describe('test instantiation an empty linked list', () => {
  it('should return a linked list', () => {
    let ll = new LL;
    expect(ll).toBeTruthy();
  });
});

describe('test a proper insert into the linked list', () => {
  it('should return a linked list with a new node added', () => {
    let ll = new LL;
    ll.head = new Node(100);
    ll.head.next = new Node(200);
    ll.head.next.next = new Node(300);
    ll.head.next.next.next = new Node(400);
    ll.insert(500);
    expect(ll.head.value).toEqual(500);
  });
});

describe('test The head property will properly point to the first node in the linked list', () => {
  it('should return a value equivalent to that of the first node in the linked list', () => {
    const ll = new LL;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);

    expect(ll.head.value).toEqual(100);
  });
});
// Can properly insert multiple nodes into the linked list
describe('test the proper ability to insert multiple nodes into list', () => {
  it('should return a linked list with multiple values', () => {
    const ll = new LL;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    expect(ll.head.value).toEqual(100);
    expect(ll.head.next.value).toEqual(200);
    expect(ll.head.next.next.value).toEqual(300);
  });
});
//Will return true when finding a value within the linked list that exists
describe('test the searching value are with in a linked list', () => {
  it('return true if the serching value in a linked list ', () => {
    const ll = new LL;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    expect(ll.includes(300)).toBeTruthy();
  });
  //Will return false when searching for a value in the linked list that does not exist
  it('should return false if target value is not present ', () => {
    const ll = new LL;
    ll.insert(400);
    ll.insert(200);
    ll.insert(100);
    expect(ll.includes(400)).toBeTruthy();
    expect(ll.includes(900)).toEqual(false);
  });
});

//===========test appended=============
describe(' code-challenge-06 testing  append at the end of the linked list', () => {
  it('should add a new node to the end of the linked list', () => {
    const ll = new LL;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    ll.append(400);

    expect(ll.head.next.next.next.value).toEqual(400);
  });
});
// insertbefore
describe(' code-challenge-06 testing (insertBefore ==> val,newvalue)', () => {
  it('Can successfully insert a node before the first node of a linked list ', () => {
    const ll = new LL;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    ll.append(400);

    expect(ll.head.next.next.next.value).toEqual(400);
  });
});
// insert after
describe(' code-challenge-06 testing (insertAfter ==> val,newvalue)', () => {
  it('Can successfully insert a node after the first node of a linked list ', () => {
    const ll = new LL;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    ll.append(400);

    expect(ll.head.next.next.next.value).toEqual(400);
  });
});
describe(' code-challenge-06 testing (insertAfter ==> val,newvalue)', () => {
  it('Can successfully insert a node after the first node of a linked list ', () => {
    const ll = new LL;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    ll.append(400);

    expect(ll.head.next.next.next.value).toEqual(400);
  });
});

