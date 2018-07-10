'use strict';

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  const hash = {};

  for (let i = 0; i < ar.length; i++) {
    const a = ar[i];
    if (hash[a]) {
      hash[a] += 1
    } else {
      hash[a] = 1;
    }
  }

  let pairs = 0;
  for (const value of Object.values(hash)) {
    pairs += Math.floor(value / 2);
  }

  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
