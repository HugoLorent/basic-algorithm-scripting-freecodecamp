function truncateString(str, num) {
  const etc = '...';
  let truncateString = '';

  if (num >= str.length) {
    return str;
  }

  for (let i = 0; i < num; i++) {
    truncateString += str[i];
  }
  return (truncateString += etc);
}

console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  )
);
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));
