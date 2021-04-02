' use strict';

class AnimalShelter {
  constructor() {
    this.database = [];
  }
  enqueue(obj) {
    this.database.push(obj);

  }
  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    } else {
      let i = 0;
      while (Object.keys(this.database[i])[0] !== pref && i < this.database.length) {
        i++;
      }
      let final = this.database[i];
      this.database.splice(i, 1);
      return final;
    }
  }
}
module.exports = AnimalShelter;