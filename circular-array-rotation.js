'use strict';

function circularArrayRotation(a, k, queries) {
  const l = a.length;
  const s = k % l;

  const r = [];
  for (const query of queries) {
    const shift = query - s;
    const index = shift < 0 ? l + shift : shift;
    r.push(a[index]);
  }

  return r;
}

console.log(circularArrayRotation([1, 2, 3], 0, [0, 1, 2]));
console.log(circularArrayRotation([1, 2, 3], 3, [0, 1, 2]));
console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
console.log(circularArrayRotation([1, 2, 3], 5, [0, 1, 2]));
console.log(circularArrayRotation([1, 2, 3, 4], 3, [0, 1, 2, 3]));
