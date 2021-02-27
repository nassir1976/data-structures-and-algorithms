// source https://medium.com/@pratikshya.pp19/binary-search-6d38365125b2//;


let LowerValue = 0;
function binarySearch(array, keyvalue) {
  let HigherValue = array.length - 1;
  while (LowerValue <= HigherValue) {
    let middle = Math.floor((LowerValue + HigherValue) / 2);
    if (array[middle] === keyvalue) {
      return middle;
    } else if (array[middle] < keyvalue) {
      LowerValue = middle + 1;
    } else {
      HigherValue = middle - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;


