'use strict';

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const d1 = Math.abs(z - x);
  const d2 = Math.abs(z - y);

  if (d1 < d2) return 'Cat A';
  if (d1 > d2) return 'Cat B';
  return 'Mouse C';
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 5, 2));
