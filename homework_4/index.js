/* 1.Given a word and a list
of possible anagrams, select the correct sublist.*/

function sameWord(word1, word2) {
  word1.toLowerCase();
  word2.toLowerCase();
  let count1 = (count2 = 0);
  if (word1.length == word2.length) {
    for (let i = 0; i < word1.length; i++) {
      count1 += word1.charCodeAt(i);
      count2 += word2.charCodeAt(i);
    }
    if (count1 == count2) {
      return true;
    }
  }
  return false;
}

function anagram(word, array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (sameWord(word, array[i])) {
      arr.push(array[i]);
    }
  }
  console.log(arr);
}

anagram("listen", ["netsil", "hluh", "stlien"]);

/*2. Write a function which receives two strings and removes appearances of 
the second string from the first one.*/
function remove(str1, str2) {
  let i = 0;
  let result = "";
  while (i < str1.length) {
    if (str1.slice(i, i + str2.length) == str2) {
      i += str2.length;
    } else {
      result += str1[i];
      i += 1;
    }
  }
  return result;
}

console.log(remove("This is some text.", "is"));
/*3. Given a sentence with missing words and an array of words. Replace all ‘_’ in a
sentence with the words from the array. */
let words = ["first", "succeed", "again"];
let sentence = "If at _ you don’t _, try, try _.";

function replace(words, sentence) {
  let k = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = k; j < sentence.length; j++) {
      if (sentence[j] == "_") {
        sentence = sentence.replace("_", words[i]);
        k = j;
        break;
      }
    }
  }
  console.log(sentence);
}

replace(words, sentence);

/*4 Write a function that accepts a string(a sentence) as a parameter and 
finds the longest word within the string․ 
If there are several words which are the longest ones print the
last word(words can be separated by space, comma, or hyphen).*/

function findLargestWord1(sentence) {
  let str = "";
  let longWord;
  let maxLength = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== "," && sentence[i] != " " && sentence[i] != "-") {
      str += sentence[i];
    } else {
      if (i == sentence.length - 1) {
        if (str.slice(-1) == "." || str.slice(-1) == "!") {
          str = str.slice(0, -1);
        }
      }
      if (maxLength <= str.length) {
        maxLength = str.length;
        longWord = str;
      }
      str = "";
    }
  }
  return longWord;
}

function findLargestWord2(sentence) {
  sentence = sentence.replace(",", "").replace("-", "").replace("  ", " ");
  if (sentence.endsWith(".") || sentence.endsWith("?")) {
    sentence = sentence.slice(0, -1);
  }
  let wordArr = sentence.split(" ");
  let longWord = "";
  for (let i = 0; i < wordArr.length; i++) {
    if (longWord.length <= wordArr[i].length) {
      longWord = wordArr[i];
    }
  }
  return longWord;
}
