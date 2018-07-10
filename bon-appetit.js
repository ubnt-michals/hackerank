'use strict';

// Complete the breakingRecords function below.
function bonAppetit(k, b, items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    if (i !== k) {
      sum += items[i];
    }
  }

  const total = sum / 2;
  return b === total ? 'Bon Appetit' : (b - total);
}

console.log(bonAppetit(1, 12, [3, 10, 2, 9]));
console.log(bonAppetit(1, 7, [3, 10, 2, 9]));
