'use strict';

let arrayShift = require('../arrayShift/array-shift.js');

describe('test array-shift', () => {

  it('an array should return the second argument number added to the middle of the index ', () => {
    let newArr = arrayShift([2,4,6,8,],5);
    let expected = ([2,4,5,6,8]);

    expect(newArr).toEqual(expected);
  });

});
