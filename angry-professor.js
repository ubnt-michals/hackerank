'use strict';

function angryProfessor(k, a) {
  let onTime = 0;
  for (const v of a) {
    if (v <= 0) {
      onTime += 1;
    }
  }

  return onTime < k ? 'YES' : 'NO';
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
console.log(angryProfessor(2, [0, -1, 2, 1]));
