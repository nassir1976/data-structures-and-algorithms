const Vertex = require('../graph/graph.js');
const Edge= require('../graph/graph.js');
const Graph = require('../graph/graph.js');

// module.exports = Vertex;
// module.exports = Edge;
// module.exports = Graph;
//check -> test





describe('Testing the class functionality of the graph ', () => {
  it('Should add a new vertex to a graph', () => {
    let check = new Graph();
    let one = new Vertex('one');
    check.addVertex(one);
    expect(check.adjacencyList.get(one)).toBeTruthy();
  });
  it(' Add a new edge between two vertices', () => {
    let check = new Graph();
    let one = new Vertex('one');
    let two = new Vertex('two');
    check.addVertex(one);
    check.addVertex(two);
    check.addEdge(one, two);
    expect(check.adjacencyList.get(one)[0].vertex.value).toEqual(undefined);
  });
  it('TEST  able to create a graph with one vertex and an edge', () => {
    let check = new Graph();
    let one = new Vertex('one');
    check.addVertex(one);
    check.addEdge(one, undefined);
    expect(check.adjacencyList.get(one)).toBeTruthy();
    expect(check.adjacencyList.get(one).vertex).toEqual(undefined);
    expect(check.adjacencyList.get(one)[0].weight).toEqual(0);
  });
});

describe('Testing graph prototype functionality', () => {

  let check = new Graph();


  let one = new Vertex('one');
  let two = new Vertex('two');
  let three = new Vertex('three');
  let four = new Vertex('four');
  let five = new Vertex('five');
  let six = new Vertex('six');

  check.addVertex(one);
  check.addVertex(two);
  check.addVertex(three);
  check.addVertex(four);
  check.addVertex(five);
  check.addVertex(six);

  check.addEdge(one, three);
  check.addEdge(two, four);
  check.addEdge(one, four);
  check.addEdge(four, two);
  check.addEdge(four, five);
  check.addEdge(two, six);

  it('Should retrieve all vertex from a graph', () => {
    expect(check.breadthFirst(one)).toBeTruthy();
    expect(Array.isArray(check.breadthFirst(one))).toBeTruthy();
    expect(check.breadthFirst(one).length).toEqual(6);
  });
  it('Should retrieve all neighbors of a vertex with weights included', () => {
    expect(check.getNeighbors(one)).toBeTruthy();
    expect(check.getNeighbors(one)[0].weight).toEqual(0);
  });
  it('Should retrieve the size of a graph', () => {
    expect(check.size(one)).toEqual(6);
  });
});

