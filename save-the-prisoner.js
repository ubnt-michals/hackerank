'use strict';

function saveThePrisoner(n, m, s) {
  return ((m + s - 1) % n) || n;
}

console.log(saveThePrisoner(1, 1, 1));
console.log(saveThePrisoner(1, 2, 1));
console.log(saveThePrisoner(5, 1, 1));
console.log(saveThePrisoner(5, 1, 2));
console.log(saveThePrisoner(5, 1, 3));
console.log(saveThePrisoner(5, 1, 4));
console.log(saveThePrisoner(5, 1, 5));
console.log(saveThePrisoner(5, 5, 1));
console.log(saveThePrisoner(5, 10, 1));
console.log(saveThePrisoner(5, 5, 5));
console.log(saveThePrisoner(5, 5, 2));
console.log(saveThePrisoner(5, 2, 1));
console.log(saveThePrisoner(5, 2, 2));
