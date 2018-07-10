'use strict';

function pageCount(n, p) {
  const half = n / 2;

  if (p <= half) {
    return Math.floor(p / 2);
  }

  const isEven = n % 2 === 0;
  const page = (n - p) / 2;
  return isEven ? Math.ceil(page) : Math.floor(page);
}

console.log(pageCount(6, 1) === 0);
console.log(pageCount(6, 2) === 1);
console.log(pageCount(6, 3) === 1);
console.log(pageCount(6, 4) === 1);
console.log(pageCount(6, 5) === 1);
console.log(pageCount(6, 6) === 0);

console.log(pageCount(7, 1) === 0);
console.log(pageCount(7, 2) === 1);
console.log(pageCount(7, 3) === 1);
console.log(pageCount(7, 4) === 1);
console.log(pageCount(7, 5) === 1);
console.log(pageCount(7, 6) === 0);
console.log(pageCount(7, 7) === 0);


