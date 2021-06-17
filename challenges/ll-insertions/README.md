## Code Challenge: Class 06


## Feature Tasks
- Write the following methods for the Linked List class:

- append(value) which adds a new node with the given value to the end of the list
- insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
- insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node


###
 append(value)

input ====>  head -> [1] -> [3] -> [2] -> X  
     =====> args 5
output====>  head -> [1] -> [3] -> [2] -> [5] -> X


## insertBefore(value, newVal)
Input=======> head -> [1] -> [3] -> [2] -> X
args =======> 3, 5  this means add a new value 5 before node 3 
Output=======>head -> [1] -> [5] -> [3] -> [2] -> X


input =======> head -> [1] -> [3] -> [2] -> X
args ========> 1, 5 this means add the new value 5 before node 1 
output ======> head -> [5] -> [1] -> [3] -> [2] -> X

### insertAfter(value, newVal)
Input=======> head -> [1] -> [3] -> [2] -> X
args =======> 3, 5  this means add a new value 5 after  node 3 
Output=======>head -> [1] -> [3] -> [5] -> [2] -> X


input =======> head -> [1] -> [3] -> [2] -> X
args ========> 1, 5 this means add the new value 5 after  node 1 
output ======> head -> [1] -> [5] -> [3] -> [2] -> X


