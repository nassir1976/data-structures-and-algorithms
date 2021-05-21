'use strict';

let mergeSort = require('../mergeSort/mergesort.js');

describe('Testing function insertionSort', () => {
  it('it should sort an array', () => {
    let arr = [8,4,23,42,16,15];
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('it should sort a reverse sorted array', () => {
    let arr = [20,18,12,8,5,-2];
    expect(mergeSort(arr)).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('it should an array with duplicates', () => {
    let arr = [5,12,7,5,5,7];
    expect(mergeSort(arr)).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('it should sort a nearly-sorted array', () => {
    let arr = [2,3,5,7,13,11];
    expect(mergeSort(arr)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});


