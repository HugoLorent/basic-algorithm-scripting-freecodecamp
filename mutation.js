function mutation(arr) {
  const secondString = arr[1].toLowerCase().split('');
  const firstString = arr[0].toLowerCase().split('');

  for (let i = 0; i < secondString.length; i++) {
    if (firstString.indexOf(secondString[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(['hello', 'hey']));
console.log(mutation(['hello', 'Hello']));
