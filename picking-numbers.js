'use strict';

function pickingNumbers(a) {
  const res = [];
  res.length = 101;
  res.fill(0, 0);

  for (let i = 0; i < a.length; i++) {
    res[a[i]] += 1;
  }

  let max = 0;
  for (let i = 0; i < res.length - 1; i++) {
    const r = res[i] + res[i + 1];
    max = r > max ? r : max;
  }

  return max;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
console.log(pickingNumbers([4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3]));
console.log(pickingNumbers([0, 0, 0, 1, 2, 3]));
console.log(pickingNumbers([100, 100, 100, 1, 2, 3]));
