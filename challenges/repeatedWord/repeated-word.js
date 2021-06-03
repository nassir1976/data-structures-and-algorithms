
'use strict';
const repeatedWord = (str) => {
  let hash = {};
  let newString = str.replace(/,/g, '');
  let Array = newString.split(' ');
  for (let i = 0; i < Array.length; i++){
    if (hash[Array[i]]|| hash[Array[i]] === 0) {
      return Array[i];
    }
    hash[Array[i].toLowerCase()] = i;
    // console.log(hash);
  }
  return null;
};

module.exports = repeatedWord;
