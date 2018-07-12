'use strict';

function jumpingOnClouds(c, k) {
  let e = 100;
  let i = 0;
  do {
    e -= 1;
    i = (i + k) % c.length;
    if (c[i] === 1) {
      e -= 2;
    }
  } while (i !== 0);

  return e;
}

console.log(jumpingOnClouds([0, 0, 0], 1));
console.log(jumpingOnClouds([1, 1, 1], 1));
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
