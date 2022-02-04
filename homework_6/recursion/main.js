/*1.Write a recursive function to determine whether all digits of the number are odd or not. */
function onlyOddDigits(num) {
    if (num < 0) {
      return onlyOddDigits(-num);
    }
    if (num % 2 == 0) {
      return false;
    }
    if (num < 10) {
      return true;
    }
  
    num = (num - (num % 10)) / 10;
    return onlyOddDigits(num);
  }
  
  //console.log(onlyOddDigits(41113)); //false
  //console.log(onlyOddDigits(11335)); //true
  
  /*2. Given an array of numbers. Write a recursive function to find its minimal positive element. 
  (if such element does not exist, return -1)․*/
  
  function minPositiveNum(arr, val = -1) {
    if (arr[0] >= 0 && val == -1) {
      val = arr[0];
    }
    if (arr.length == 0) {
      return val;
    }
  
    if (arr[0] >= 0 && arr[0] < val) {
      val = arr[0];
    }
    return minPositiveNum(arr.slice(1), val);
  }
  //console.log(minPositiveNum([4, 7, -8, 1, 0, -7, 8])); //0
  //console.log(minPositiveNum([-5, -9, -111, -1000, -7])); //-1
  
  /*3. Given an array of numbers which is almost sorted in ascending order.  
  Find the index where sorting order is violated.*/
  
  function violatedIndex(arr, i = 0) {
    if (i == arr.length) {
      return -1;
    }
    if (arr[i] > arr[i + 1]) {
      return i + 1;
    }
    return violatedIndex(arr, i + 1);
  }
  //console.log(violatedIndex([2, 12, 15, 48, 64])); //-1
  //console.log(violatedIndex([-9, -4, -4, 3, 12, 4, 5])); //5
  
  /*4. Given an array. Write a recursive function that removes the first element and returns the given array.
  (without using arr.shift())*/
  
  function removeFirstEl(arr, newArr = [], i = 1) {
    if (arr.length <= 1 || i == arr.length) {
      return newArr;
    }
    newArr.push(arr[i]);
    return removeFirstEl(arr, newArr, i + 1);
  }
  //console.log(removeFirstEl([6, 78, "n", 0, 1]));//[78, 'n', 0, 1]
  
  /*5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint
  create a function that concats arrays).*/
  function flattenNestedArray(arr, result = []) {
    if (arr.length == 0) {
      return result;
    }
    if (!Array.isArray(arr[0])) {
      result.push(arr[0]);
      return flattenNestedArray(arr.slice(1), result);
    }
    if (Array.isArray(arr[0])) {
      concat(arr[0], arr.slice(1));
      return flattenNestedArray(arr[0], result);
    }
  }
  
  function concat(arr1, arr2) {
    for (i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  }
  //console.log(flattenNestedArray([1, [3, 4, [1, 2]], 10]));
  //console.log(flattenNestedArray([14, [1, [[3, []]], 1], 0]));
  
  /*6.Given an array and a number N.  Write a recursive function that rotates an array N
  places to the left. (Hint: to add an element to the beginning use arr.unshift()) */
  function rotate(arr, n) {
    if (n == 0) {
      return arr;
    }
    if (n > 0) {
      let x = arr[0];
      arr.shift();
      arr.push(x);
      return rotate(arr, n - 1);
    }
    let x = arr[arr.length - 1];
    arr.pop();
    arr.unshift(x);
    return rotate(arr, n + 1);
  }
  
  //console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
  //['g', 'h', 'a', 'b', 'c', 'd', 'e', 'f']
  //console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
  //['d', 'e', 'f', 'g', 'h', 'a', 'b', 'c']
  
  /*7. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1
  digit find the sum of digits of that number. Repeat that process if needed and return the result.*/
  function sumDigit(number) {
    if (number < 0) {
      number = -number;
    }
    if (number < 10) {
      return number;
    }
    let sum = 0;
    while (number !== 0) {
      sum += number % 10;
      number = (number - (number % 10)) / 10;
    }
  
    return sumDigit(sum);
  }
  
  //console.log(sumDigit(29));
  //console.log(sumDigit(999999999999));
  
  /*8.Create a recursive function that will do deep clone of an object. */
  /*9.Implemet debounce*/
  /*10.Implement throttle.*/
  
  