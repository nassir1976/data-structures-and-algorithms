'use strct';

const Node = require('../ll-kth-from-end/node.js');

const LinkedList = require('../ll-kth-from-end/ll-kth-from-end.js');


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
    let ll = new LinkedList;
    expect(ll).toBeTruthy();
  });
});

describe('test a proper insert into the linked list', () => {
  it('should return a linked list with a new node added', () => {
    let ll = new LinkedList;
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
    const ll = new LinkedList;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);

    expect(ll.head.value).toEqual(100);
  });
});
// Can properly insert multiple nodes into the linked list
describe('test the proper ability to insert multiple nodes into list', () => {
  it('should return a linked list with multiple values', () => {
    const ll = new LinkedList;
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
    const ll = new LinkedList;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    expect(ll.includes(300)).toBeTruthy();
  });
  //Will return false when searching for a value in the linked list that does not exist
  it('should return false if target value is not present ', () => {
    const ll = new LinkedList;
    ll.insert(400);
    ll.insert(200);
    ll.insert(100);
    expect(ll.includes(400)).toBeTruthy();
    expect(ll.includes(900)).toEqual(false);
  });
});
// Can properly return a collection of all the values that exist in the linked list
describe('testing added a collection of new node the value of the existing linked list', () => {

  it(' add a collection of new node the value of the existing linked list ', () => {
    const ll = new LinkedList;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    ll.append(400);
    ll.append(500);
    expect(ll.head.next.next.next.value).toEqual(400);
    expect(ll.head.next.next.next.next.value).toEqual(500);
  });
});


// ====== code challenge 06 ==========
//===========test appended=============
describe(' code-challenge-06 testing  append at the end of the linked list', () => {
  it('should add a new node to the end of the linked list', () => {
    const ll = new LinkedList;
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    ll.append(400);

    expect(ll.head.next.next.next.value).toEqual(400);
  });
});
// insertbefore
describe('testing linked list insertBefore function', () => {
  it('should add a new node before a target value that is the first node of the list', () => {
    const ll = new LinkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.insertBefore(1, 4);

    expect(ll.head.value).toEqual(1);
  });
  it('should add a  new node before an existing node in the middle of the linked list', () => {
    const ll = new LinkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.insertBefore(3, 7);

    expect(ll.head.next.next.value).toEqual(7);
  });
});
//insert after
describe('testing linked list insertAfter function', () => {
  it('should add a new node after a target value that is a middle node in the list', () => {
    const ll = new LinkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.insertAfter(2, 5);

    expect(ll.head.next.next.value).toEqual(5);
  });
  it('should add a new node before the last node of the linked list', () => {
    const ll = new LinkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.insertAfter(3, 4);

    expect(ll.head.next.next.next.value).toEqual(4);
  });
});


//=============code-chllenge-7  ==========


describe('testing linked list kthFromEnd function', () => {
  it('return invalid value when "k" is greater than the length of the linked list', () => {
    const ll = new LinkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.kthFromEnd(5)).toEqual('invalid value use');
  });
  //Where k and the length of the list are the same
  it('index start with zero so index greater than length of the list so the out put is invalid', () => {
    const ll = new LinkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);

    expect(ll.kthFromEnd(4)).toEqual('invalid value use');
  });
  // Where k is not a positive integer
  it('when k is negative number invalid out put ', () => {
    const ll = new LinkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);

    expect(ll.kthFromEnd(-2)).toEqual('invalid value use');
  });
  //  Where the linked list is of a size 1
  it('if k =0 should return only one value in the linked list', () => {
    const ll = new LinkedList;
    ll.insert(5);
    expect(ll.kthFromEnd(0)).toEqual(5);
  });
});





