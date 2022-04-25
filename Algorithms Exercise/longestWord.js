/*  
    Find a longest word
*/

const word = "Hello my name is Üneys Ahmet  examples123**";

function longestWord(word) {
  let reg = /[^a-zA-Z0-9 ]/g;
  let splitWords = word.replace(reg, " ").split(" ");
  let longest = splitWords[0];

  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length > longest.length) {
      longest = splitWords[i];
    }
  }
  return longest;
}


// WİTH SORT

const str = "Hello second examp1234/*";

function longest(str) {
  str = str.match(/[a-z]+/gi);
  return str.sort((a, b) => b.length - a.length)[0];
}

console.log("Longest Word :",longestWord(word))
console.log("Longest Word Second :",longest(str))
