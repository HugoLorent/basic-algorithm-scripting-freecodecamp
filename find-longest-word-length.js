function findLongestWordLength(str) {
  let allWordsTab = [];
  let wordTab = [];
  let longestWordLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      wordTab.push(str[i]);
    } else {
      allWordsTab.push(wordTab);
      wordTab = [];
    }
  }
  allWordsTab.push(wordTab);

  for (let i = 0; i < allWordsTab.length; i++) {
    if (allWordsTab[i].length > longestWordLength) {
      longestWordLength = allWordsTab[i].length;
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
