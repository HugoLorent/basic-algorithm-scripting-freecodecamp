function chunkArrayInGroups(arr, size) {
  let finalArray = [];
  let simpleArray = [];

  while (arr.length !== 0) {
    for (let i = 0; i < size; i++) {
      simpleArray.push(arr[i]);
    }
    finalArray.push(simpleArray);
    simpleArray = [];
    arr.splice(0, size);

    if (arr.length < size && arr.length !== 0) {
      finalArray.push(arr);
      return finalArray;
    }
  }
  return finalArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
