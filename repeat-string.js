function repeatStringNumTimes(str, num) {
  const stringToRepeat = str;
  if (num <= 0) {
    return '';
  }
  for (let i = 1; i < num; i++) {
    str += stringToRepeat;
  }
  return str;
}

console.log(repeatStringNumTimes('abc', 3));
