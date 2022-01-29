//Also please take a look at Lodash documentation and try to implement the following functions

//1.Creates an array of unique values that are included in all given arrays

function intersection(...arr) {
  let first = [...new Set(arr[0])]; //delete duplicates from Array

  const result = first.filter(function (val) {
    return arr.every(function (checked) {
      return checked.includes(val);
    });
  });
  return result;
}
console.log(intersection([1, 1, 2, 3], [1, 1, 2], [1, 1, 2]));

//2.Removes all given values from array.

function pullArr(arr, ...args) {
    for (let i = 0; i < args.length; i++) {
      while (arr.indexOf(args[i]) !== -1) {
        let index = arr.indexOf(args[i]);
        arr.splice(index, 1);
      }
    }
    return arr;
  }
  console.log(pullArr([1, 2, 3, 4, 5, 2, 3], 1, 7, 3, 2));
  
//3.Gets all but the first element of array.

function tale(arr) {
  return arr.slice(1, arr.length);
}

console.log(tale([1, 2, 3, 4, 5]));


//4.Creates a slice of array with n elements taken from the end.
function take(arr, number = 1) {
  if (number > arr.length) {
    return arr;
  }
  return arr.slice(arr.length - number, arr.length);
}

console.log(take([1, 2, 3], 2));

//5.Creates an array of elements split into groups the length of size.
//If array can't be split evenly, the final chunk will be the remaining elements.

function chunk(arr, size) {
  const result = [];
  let child = [];
  for (let i = 0; i < arr.length; i++) {
    child.push(arr[i]);
    if (child.length == size || i == arr.length - 1) {
      result.push(child);
      child = [];
    }
  }
  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));