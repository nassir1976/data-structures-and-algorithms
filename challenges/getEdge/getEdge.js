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
  // addVertex(vertex) {
  //   this.adjacencyList.set(vertex, []); // this will be used to store edges
  // }

  addNode(node) {
    this.adjacencyList.set(node, []); // this will be used to store edges
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



  depthFirst(vertex) {
    const visitedVertices = new Set();
    visitedVertices.add(this.vertex);
    const traverse = (current, visited) => {
      visitedVertices.add(current);
      const neighbors = this.getNeighbors(current);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traverse(neighbor.vertex, visited);
        }
      }
    };
    traverse(vertex, visitedVertices);
    return visitedVertices;
  }
  size(start) {
    let arr = this.breadthFirst(start);
    return arr.length;
  }

  getEdges(cities) {
    let price = 0;
    let stack = [];
    for(let i = 0; i < cities.length - 1; i++) {
      let edges = this.getNeighbors(cities[i]);
      if (!edges) {
        return [false, 0];
      }
      for (let j = 0; j < edges.length; j++) {
        if (edges[j].vertex.value === cities[i + 1].value) {
          stack.push(edges[j].vertex.value);
          price += edges[j].weight;
        }
      }
      if (stack.length === 0) {
        return [false, 0];
      }
      stack.pop();
    }
    return [true, price];
  }

}



// const graph = new Graph();

// const a = new Vertex('a');
// const b = new Vertex('b');
// const c = new Vertex('c');
// const d = new Vertex('d');
// const e = new Vertex('e');
// const f = new Vertex('f');

// graph.addVertex(a);
// graph.addVertex(b);
// graph.addVertex(c);
// graph.addVertex(d);
// graph.addVertex(e);
// graph.addVertex(f);

// console.log('build up graph', graph);

// graph.addDirectedEdge(a, b);

// console.log('one edge added', graph);

// graph.addDirectedEdge(b, c);
// graph.addDirectedEdge(c, a);

// console.log('cyclical', graph);

module.exports = Vertex;
module.exports = Edge;
module.exports = Graph;

