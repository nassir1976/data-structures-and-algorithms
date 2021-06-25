'use strict';



const Vertex = require('../graph/graph.js');
const Edge = require('../graph/graph.js');
const Graph = require('../graph/graph.js');

module.exports = Vertex;
module.exports = Edge;
module.exports = Graph;
//check -> test





describe('Testing the class functionality of the graph ', () => {
  it('Should add a new vertex to a graph', () => {
    let check = new Graph();
    let one = new Vertex('one');
    check.addNode(one);
    expect(check.adjacencyList.get(one)).toBeTruthy();
  });
  it(' Add a new edge between two vertices', () => {
    let check = new Graph();
    let one = new Vertex('one');
    let two = new Vertex('two');
    check.addNode(one);
    check.addNode(two);
    check.addEdge(one, two);
    expect(check.adjacencyList.get(one)[0].vertex.value).toEqual(undefined);
  });
  it('TEST  able to create a graph with one vertex and an edge', () => {
    let check = new Graph();
    let one = new Vertex('one');
    check.addNode(one);
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

  check.addNode(one);
  check.addNode(two);
  check.addNode(three);
  check.addNode(four);
  check.addNode(five);
  check.addNode(six);

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
describe('Testing graph getEdges functionality', () => {

  let test = new Graph();


  let one = new Vertex('Pandora');
  let two = new Vertex('Metroville');
  let three = new Vertex('Arendelle');
  let four = new Vertex('Monstropolis');
  let five = new Vertex('Narnia');
  let six = new Vertex('Naboo');

  test.addNode(one);
  test.addNode(two);
  test.addNode(three);
  test.addNode(four);
  test.addNode(five);
  test.addNode(six);

  test.addEdge(one, three, 150);
  test.addEdge(three, two, 99);
  test.addEdge(two, five, 37);
  test.addEdge(five, six, 250);
  test.addEdge(one, two, 82);
  test.addEdge(six, four, 73);
  test.addEdge(three, four, 42);
  test.addEdge(two, four, 105);
  test.addEdge(two, six, 26);

  test.addEdge(three, one, 150);
  test.addEdge(two, three, 99);
  test.addEdge(five, two, 37);
  test.addEdge(six, five, 250);
  test.addEdge(two, one, 82);
  test.addEdge(four, six, 73);
  test.addEdge(four, three, 42);
  test.addEdge(four, two, 105);
  test.addEdge(six, two, 26);

  it('Should return whether a direct route is possible and the price of it', () => {
    expect(test.getEdges([one, two])).toEqual([true, 82]);
    expect(test.getEdges([three, four, six])).toEqual([true, 115]);
    expect(test.getEdges([six, one])).toEqual([false, 0]);
    expect(test.getEdges([five, three, six])).toEqual([false, 0]);
  });
});

