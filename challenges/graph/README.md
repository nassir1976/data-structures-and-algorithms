## Graphs



## Challenge

- Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

## API

- AddNode()
   - Adds a new node to the graph
   - Takes in the value of that node
   - Returns the added node

- AddEdge()
    - Adds a new edge between two nodes in the graph
    - Include the ability to have a “weight”
    - Takes in the two nodes to be connected by the edge
        - Both nodes should already be in the Graph
- GetNodes()
   - Returns all of the nodes in the graph as a collection (set, list, or similar)
- GetNeighbors()
    - Returns a collection of edges connected to the given node
    - Takes in a given node
    - Include the weight of the connection in the returned collection
- Size()
   - Returns the total number of nodes in the graph

## Approach & Efficiency
I took theapproch of creating function with a O(V+E) time- complacity and O(n^2) space complacity .


## Solution 

 - to solve this DSA problem I just used a basic constructor functions to create a vertex , an edge, and a graph before creating a class function for the graph that acept nodes and edges .then I used helper function (getNeigbors).