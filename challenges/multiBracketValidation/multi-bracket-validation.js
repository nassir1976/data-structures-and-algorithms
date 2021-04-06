'use strict';


let matchingBrackets = function (str) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    }
    else {
      let last = stack.pop();
      if (str[i] !== map[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }

  return true;
};

console.log(matchingBrackets('(){1,2,3,3}')); // returns true
console.log(matchingBrackets('[{()()}]')); //  returns tru
console.log(matchingBrackets('({((code-fellows)))}}')); // returns false//

module.exports = matchingBrackets;

//attribute:https://paulrohan.medium.com/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911

