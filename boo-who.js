function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  }
  return false;
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(1));
