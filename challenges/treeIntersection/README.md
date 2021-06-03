
### code challenge 32
### Challenge
  - Write a function called tree_intersection that takes two binary tree parameters.
  - Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.
#### Approach & Efficiency

   - Wrote a function tree_intersection() that utilized a code I had previously written for Binary Trees
       - Refactored the preOrder()traversal method of the BinaryTree class to add an evaluation step before determining if a node value should be added to the resultant array
      - Added logic to return 'No values in common.' if the two trees passed into the function contain no common values.

### Solution
