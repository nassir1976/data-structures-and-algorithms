'use strict';
const AnimalShelter = require('../fifoAnimalShelter/fifo-animal-shelter.js');


describe('test the class animalshelter function', () => {
  it('add the value to the shelter enqueue', () => {
    const animal = new AnimalShelter;
    animal.enqueue({cat: 'A'});
    animal.enqueue({dog: 'B'});
    animal.enqueue({cat: 'C'});
    animal.enqueue({dog: 'D'});
    expect(animal.database[0]).toEqual({cat: 'A'});
  });
});