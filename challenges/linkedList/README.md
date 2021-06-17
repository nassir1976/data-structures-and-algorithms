# Code Challenge: Class 05

# Implementation: Singly Linked Lists

# Singly Linked List

- A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail). Each element in a linked list is called a node. A single node contains data and a pointer to the next node which helps in maintaining the structure of the list.

## Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node. 
- on this  single linkedList class define a method called **insert** ,  define a method called  **includes** , define a method called **toString** .

## Approach & Efficiency

- LinkedList -> Insertion in the beginning : O(1)
- LinkedList -> Retrieval based on index : O(i) where i is number of elements 
- LinkedList is that insertions and deletion can be done very quickly
- If you just want to insert an element right to the beginning of the LinkedList, that can be done in constant time O(1).
# big O Notation 
- provide transparency into(with out acctually running).
-time commplexity (efficiency)
- space complexity (strong ).



## API
 ### insert 
- new node is added before the current head node. To fulfill this operation we will first create a node. The newly created node will be having two properties as defined in the constructor function of the Node class, value  and next.
### includes 
- find for the value in single linkedlist and return boolean(true or falsy).
### tostring 
-  the out put of the linked list it should be in a string .
### append 
- add node at the end of the linked list .


