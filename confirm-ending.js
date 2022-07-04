function confirmEnding(str, end) {
  let searchStringArray = [];
  let searchString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    searchStringArray.unshift(str[i]);
    searchString = [...searchStringArray].join('');
    if (searchString === end) {
      return true;
    }
  }
  return false;
}

console.log(confirmEnding('Open sesame', 'sage'));
console.log(confirmEnding('Congratulation', 'on'));
console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('He has to give me a new name', 'name'));
