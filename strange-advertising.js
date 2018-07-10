'use strict';

function viralAdvertising(n) {
  let shared = 5;
  let total = 0;
  for (let i = 1; i <= n; i++) {
    const liked = Math.floor(shared / 2);
    shared = liked * 3;
    total += liked;
  }

  return total;
}

console.log(viralAdvertising(3));
console.log(viralAdvertising(5));
console.log(viralAdvertising(50));
