'use strict';

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  let c = 0;
  for (; i <= j; i++) {
    // could be done better
    const r = parseInt(String(i).split('').reverse().join(''), 10);
    if (Math.abs(i - r) % k === 0) {
      c += 1;
    }
  }

  return c;
}

console.log(beautifulDays(20, 23, 6));
