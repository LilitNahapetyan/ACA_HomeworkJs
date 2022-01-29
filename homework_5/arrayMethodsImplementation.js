//1.Implement following array methods:

/*The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.*/

function myConcat(...args) {
  return args.reduce(function (aggr, val) {
    if (Array.isArray(val)) {
      aggr.push(...val);
    } else {
      aggr.push(val);
    }
    return aggr;
  }, []);
}

console.log(myConcat([1, 2, 3], 5, [4, 5, 6]));


/*The fill() method changes all elements in an array to a static value, 
  from a start index (default 0) to an end index (default array.length). It returns the modified array.*/

function myFill(arr, newVal, start = 0, end = arr.length) {
  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }
  for (let i = start; i < end; i++) {
    arr[i] = newVal;
  }
  return arr;
}

console.log(myFill(["Banana", "Orange", "Apple", "Mango"], "Kiwi", 1, 4));

/*The arr.find() method in Javascript is used to get the value of the first element in the array that satisfies the provided condition.*/
function myFind(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return arr[i];
    }
  }
}

console.log(
  myFind([1, 2, 3, 4, 5, 6, 7, 8], function (element) {
    return element > 4;
  })
);


/*The findIndex() method returns the index (position) of the first element that passes a test and returns -1 if no match is found.*/

function myFindIndex(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return i;
    }
  }
  return -1;
}

console.log(
  myFindIndex([1, 2, 3, 4, 5, 6, 7, 8], function (element) {
    return element > 8;
  })
);


//The flat() method concatenates all the elements of the given multidimensional array, 
//and flats upto the specified depth.

function flattenNestedArray(arr, depth = 1) {
  let result = [];
  while (depth !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result.push(...arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    arr = result;
    result = [];
    depth = depth - 1;
  }
  return arr;
}

console.log(flattenNestedArray([1, [3, 4, [1, 2]], 10]));
console.log(flattenNestedArray([14, [1, [[3, []]], 1], 0], 4));


/*The map() creates a new array from calling a function for every array element.*/
function myMap(arr, fun) {
  const newArr = [];
  arr.forEach(function (val, i) {
    newArr[i] = fun(val);
  });
  return newArr;
}


/*The reduce() method returns the reduced single value of the array.*/
function myReduce(arr, fun, agr = 0) {
  for (let i = 0; i < arr.length; i++) {
    agr = fun(agr, arr[i]);
  }
  return agr;
}

console.log(
  myReduce(
    [1, 4, 2, 77, 5, 6],
    function (agr, val) {
      return Math.max(agr, val);
    },
    5
  )
);
