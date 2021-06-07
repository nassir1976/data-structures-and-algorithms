let leftJoin = require('../leftJoin/left-join.js');

describe('leftJoin functionality', () => {
  let hashOne;
  let hashTwo;
  beforeEach(() => {
    hashOne = [
      [{'fond': ['enamored']}],
      [{'wrath': ['anger']}],
      [{'diligent': ['employed']}],
      [{'outfit': ['garb']}],
      [{'guide': ['usher']}],
    ];
    hashTwo = [
      [{'fond': ['averse']}],
      [{'wrath': ['delight']}],
      [{'diligent': ['idel']}],
      [{'guide': ['follow']}],
      [{'flow': ['jam']}],
    ];
  });

  it('Should return a hash table', () => {
    let returnedTable = leftJoin(hashOne, hashTwo);
    expect(returnedTable).toBeTruthy();
  });

});










