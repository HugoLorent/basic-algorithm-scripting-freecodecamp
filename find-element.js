function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      return (num = arr[i]);
    }
  }
  return undefined;
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);

console.log(
  findElement([1, 3, 5, 9], (num) => {
    return num % 2 === 0;
  })
);
