'use strict';

// Complete the solve function below.
function solve(s, d, m) {
  let counter = 0;
  let sum = 0;

  const w = [];
  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    sum += val;
    w.push(val);
    if (w.length > m) {
      sum -= w.shift();
    }

    if (w.length === m && sum === d) {
      counter += 1;
    }
  }
  return counter;
}

console.log(solve([1, 2, 1, 3, 2], 3, 2));
console.log(solve([1, 1, 1, 1, 1, 1], 3, 2));
console.log(solve([4], 4, 1));
