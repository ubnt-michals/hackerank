'use strict';

function utopianTree(n) {
  let h = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      h += 1;
    } else {
      h *= 2;
    }
  }

  return h;
}

console.log(utopianTree(0));
console.log(utopianTree(1));
console.log(utopianTree(4));
