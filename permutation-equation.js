'use strict';

function permutationEquation(p) {
  const r = [];
  for (let i = 0; i < p.length; i++) {
    r[p[p[i] - 1] - 1] = i + 1;
  }

  return r;
}

console.log(permutationEquation([2, 3, 1]));
console.log(permutationEquation([5, 2, 1, 3, 4]));
