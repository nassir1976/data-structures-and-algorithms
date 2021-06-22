'use strict';

// see this as a similar thing as a "node" in BT, LL, etc
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// this is the line between vertexes
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
// the only thing we need to hold on our graph is a the list of all edges and their related verticies
// we can do that, by holding them in a key/val pair set, using new Map()
class Graph {
  constructor() {
    this.adjacencyList = new Map(); // this is going to be used to keep track of our edges (key = some vertex // value = some edge)
  }
  // addNode(node){
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []); // this will be used to store edges
  }
  // addEdge // adds this edge to a set of connected verticies
  addEdge(startVertex, endVertex, weight = 0) {
    let adjancencies = this.adjacencyList.get(startVertex);
    console.log('list type:', adjancencies);
    adjancencies.push(new Edge(endVertex, weight));

  }
  // create a copy of our list and return the copy -> this contains all related vertixes on this list
  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(vertex) {
    const queue = [];
    const visited = [];
    queue.unshift(vertex);
    visited.push(vertex);
    while (queue.length) {
      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex);
      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;
        if (visited.includes(neighborVertex)) {
          continue;
        } else {
          visited.push(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }
    return visited;
  }
}

module.exports = Vertex;
module.exports = Edge;
module.exports = Graph;

