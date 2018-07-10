'use strict';

// Complete the hurdleRace function below.
function hurdleRace(k, height) {
  let max = 1;
  for (const h of height) {
    if (h > max) {
      max = h;
    }
  }

  const p = max - k;
  return p < 0 ? 0 : p;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
console.log(hurdleRace(7, [2, 5, 4, 5, 2]));
