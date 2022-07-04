function findLongestWordLength(str) {
  let allWordsArray = [];
  let wordArray = [];
  let longestWordLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      wordArray.push(str[i]);
    } else {
      allWordsArray.push(wordArray);
      wordArray = [];
    }
  }
  allWordsArray.push(wordArray);

  for (let i = 0; i < allWordsArray.length; i++) {
    if (allWordsArray[i].length > longestWordLength) {
      longestWordLength = allWordsArray[i].length;
    }
  }
  return longestWordLength;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
console.log(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
);
console.log(findLongestWordLength('May the force be with you'));
