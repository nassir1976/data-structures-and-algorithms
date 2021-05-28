

let LinkedList = require('../hashtable/linkedList.js');


let HashTable = require('../hashtable/hashtable.js');


describe('Hash Table functionality', () => {
  it('Should add a key/value pair', () => {
    let table = new HashTable(1024);
    table.add('Nassir', 'student');
    table.add('Nassir', 'student');
    expect(table.contains('Nassir')).toBeTruthy();
  });
  it('Should retrieve a value if given a key', () => {
    let table = new HashTable(1024);
    table.add('Nassir', 'student');
    expect(table.get('Nassir')).toEqual('student');
  });
  it('Should return null for a key that does not exist', () => {
    let table = new HashTable(1024);
    table.add('Nassir', 'student');
    expect(table.get('Frank')).toBeFalsy();
  });
  it('Should succesfully handle a collision within the table', () => {
    let table = new HashTable(1024);
    table.add('Nassir', 'student');
    table.add('Nassir', 'footballer');
    expect(table.contains('Nassir')).toBeTruthy();
    expect(table.get('Nassir')).toEqual('footballer');
    expect(table.find('Nassir').next).toBeTruthy();

  });
  it('Should succesfully retrieve a value from a collision within the table', () => {
    let table = new HashTable(1024);
    table.add('Nassir', 'student');
    table.add('Nassir', 'footballer');
    expect(table.find('Nassir').next.value['Nassir']).toEqual('student');
  });
  it('Should succesfully hash a a key to an in-range value', () => {
    let table = new HashTable(1024);
    let hashOne = table.hash('Nassir');
    let hashTwo = table.hash('seawaks football team');
    expect(hashOne < 1024 && hashOne>0).toBeTruthy();
    expect(hashTwo < 1024 && hashTwo>0).toBeTruthy();
  });
});
