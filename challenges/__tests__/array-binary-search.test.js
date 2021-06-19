
const bainarysearch = require('../arrayBinarySearch/array-binary-search.js');

describe('test array-binary-search', () => {

  it('an array should return if found the index of the search number ', () => {
    const binarySearch = bainarysearch([4,8,15,16,23,42], 15);
    expect(binarySearch).toEqual(2);
  });
  it('should return -1 if the number not found',()=>{
    let binarySearch = bainarysearch([15,30,45,60,75,90],106);
    expect(binarySearch).toEqual(-1);
  });

});

