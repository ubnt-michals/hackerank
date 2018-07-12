'use strict';

function findDigits(n) {
  // ugly
  return Array.from(String(n))
    .map(v => parseInt(v, 10))
    .filter(v => v !== 0 && n % v === 0)
    .length;
}

function findDigitsNice(n) {
  let v = n;
  let c = 0;
  while (v !== 0) {
    const d = v % 10;
    if (d !== 0 && n % d === 0) {
      c += 1;
    }
    v = (v - d) / 10;
  }

  return c;
}

console.log(findDigits(1012));
console.log(findDigits(12));
console.log(findDigitsNice(1012));
console.log(findDigitsNice(12));
