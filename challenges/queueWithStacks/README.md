# Class 11: Implement a Queue using two Stacks.

  # challenge 

  #### test npm test ---> queue-with-stacks

  - to create a brand new PseudoQueue class. Do note use an existing Queue. instead, this PseudoQueue class will implement our standard queue interface(the two methods listed below),reassure that your class with the following methods 
   

 - enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approch (FIFO)

  - enQueue(q, x):

- While stack1 is not empty, push everything from stack1 to stack2.
- Push x to stack1 (assuming size of stacks is unlimited).
- Push everything back to stack1.
- Here time complexity will be O(n)

-  dequeue (value) which extracts a valu from the PseudoQueue, using a first-in , first-out approch 
- deQueue(q):

- If stack1 is empty then error
- Pop an item from stack1 and return it
- Here time complexity will be O(1)

#### approch and Efficiency 
- enqueue space O(1) time O(1)
- dequeue space : space O(n^2)- time :O(n^2)

### collaborated with :

Dawit Ayana


 ![WhiteBoard](../assets/queuewithstacks.png)