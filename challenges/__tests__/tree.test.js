'use strict';
const TreeMaster = require('../tree/tree.js');

const Tree = TreeMaster.tree;
const BinarySearchTree = TreeMaster.add;
const Node = TreeMaster.node;


describe('testing Tree Class Constructor and Methods', () => {
  it('should instantiate a new Tree', () => {
    const tree = new Tree;
    expect(tree).toBeTruthy();
  });
  it('should instantiate a new Tree with a root node', () => {
    const tree = new Tree;
    tree.root = new Node(5);
    expect(tree.root.value).toEqual(5);
  });
  it('should assign a left and right child to a root node', () => {
    const tree = new Tree;
    tree.root = new Node(5);
    tree.root.left = new Node(3);
    tree.root.right = new Node(8);
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.right.value).toEqual(8);
  });
  it('should return a collection from preorder traversal', () => {
    const tree = new Tree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.left = new Node('F');
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual([ 'A', 'B', 'D', 'E', 'C', 'F' ]);
  });
  it('should return a collection from postorder traversal', () => {
    const tree = new Tree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.left = new Node('F');
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual([ 'D', 'E', 'B', 'F', 'C', 'A' ]);
  });
  it('should return a collection from in order traversal', () => {
    const tree = new Tree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.left = new Node('F');
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual([ 'D', 'B', 'E', 'A', 'F', 'C' ]);
  });
});


// describe('Tree', () => {

//   const tree = new Tree();

//   beforeAll( () => {

//     // Binary Search Tree...
//     // tree.add(9); tree.add(4);

//     // Binary tree, so this all by hand
//     const nine = new Node(9);
//     const four = new Node(4);
//     const three = new Node(3);
//     const six = new Node(6);
//     const twelve = new Node(12);
//     const eleven = new Node(11);
//     const twentytwo = new Node(22);

//     tree.root = nine;
//     nine.left = four;
//     nine.right = twelve;
//     four.left = three;
//     four.right = six;
//     twelve.left = eleven;
//     twelve.right = twentytwo;

//   });

//   xit('binary search tree can add a root', () => {
//     const testTree = new BinarySearchTree();
//     testTree.add(9);
//     expect(tree.root.value).toEqual(9);
//     testTree.add(4);
//     expect(tree.root.left.value).toEqual(4);
//   });

//   it('is a tree', () => {
//     // is tree an "instanceOf" BinarySearchTree
//   });

//   it('has a valid root', () => {
//     expect(tree.root.value).toEqual(9);
//   });

//   it('pre-order works right', () => {

//     console.log(tree.preOrder());
//   });

//   it('in-order is a sorted array', () => {
//     /*
//       const tree = new BinarySearchTree();
//       tree.add(5);
//       tree.add(4);
//       tree.add(9);
//       tree.add(8);
//       const list = tree.inOrder();
//       expect(list).toEqual(4,5,8,9);
//     */
//     console.log(tree.inOrder() );
//     console.log(tree.inOrderWithoutHelper(tree.root) );
//   });

//   it('post-order is in the right order', () => {
//     console.log(tree.postOrder());
//   });

//   it('breadth first strips the tree', () => {
//     console.log(tree.breadthFirst());
//   });

// });



