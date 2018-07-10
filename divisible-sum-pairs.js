'use strict';

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    const a1 = ar[i];
    for (let j = i + 1; j < n; j++) {
      const a2 = ar[j];

      if ((a1 + a2) % k === 0) {
        counter += 1;
      }
    }
  }

  return counter;
}


console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
