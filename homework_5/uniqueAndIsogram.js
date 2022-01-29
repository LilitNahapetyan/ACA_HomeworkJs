//////////////////////////////////////////////////////////////////////////////////////
//2.Given an array. Determine whether it consists only of unique items or not.

function hasOnlyUniqueItem(arr) {
  let set = new Set(arr);
  if (set.size === 1) {
    return true;
  }
  return false;
}

console.log(hasOnlyUniqueItem([1, 1, 1, 1, 1, 1]));

///////////////////////////////////////////////////////////////////////////////////
//3.Determine if a word or phrase is an isogram.
//An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter.
function isIsogram(stringWord) {
  const splitString = stringWord.split("");
  const setString = new Set(splitString);
  if (splitString.length == setString.size) {
    return true;
  }
  return false;
}

console.log(isIsogram("Lilit"));