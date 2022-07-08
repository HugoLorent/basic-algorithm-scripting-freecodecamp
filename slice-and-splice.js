function frankenSplice(arr, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr);
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(
  frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
);
