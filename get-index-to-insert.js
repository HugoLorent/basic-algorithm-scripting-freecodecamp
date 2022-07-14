function getIndexToIns(arr, num) {
  let hasFindIndex = false;
  if (arr.length === 0) {
    return 0;
  }
  const sortedArray = arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < sortedArray.length; i++) {
    if (num <= arr[i]) {
      hasFindIndex = true;
      return i;
    }
  }
  return sortedArray.length;
}

console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([5, 3, 20, 3], 5));
