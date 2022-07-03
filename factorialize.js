function factorialize(num) {
  let i = 1;
  let result = num;

  if (num === 0) {
    return 1;
  }
  while (i < num) {
    result *= i;
    i++;
  }
  return result;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(0));
