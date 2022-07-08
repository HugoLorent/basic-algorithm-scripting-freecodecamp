function titleCase(str) {
  let strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < strArray[i].length; j++) {
      if (j === 0) {
        const firstCharacter = strArray[i][j].toUpperCase();
        strArray[i] = strArray[i].replace(strArray[i][j], firstCharacter);
      } else {
        const otherCharacter = strArray[i][j].toLowerCase();
        strArray[i] = strArray[i].replace(strArray[i][j], otherCharacter);
      }
    }
  }
  return strArray.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase('sHoRt AnD sToUt'));
