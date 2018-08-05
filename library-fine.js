'use strict';

function libraryFine(d1, m1, y1, d2, m2, y2) {
  // no fine
  if (y1 < y2 || (y1 === y2 && (m1 < m2 || (m1 === m2 && d1 <= d2)))) {
    return 0;
  }

  // fixed fine
  if (y1 > y2) {
    return 10000;
  }

  if (m1 > m2) {
    return (m1 - m2) * 500;
  }

  return (d1 - d2) * 15;
}

console.log(libraryFine(1, 1, 1, 2, 1, 1));
console.log(libraryFine(9, 9, 2000, 9, 9, 2000));
console.log(libraryFine(1, 1, 2001, 31, 12, 2000));
console.log(libraryFine(1, 9, 2000, 9, 9, 2000));
console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine(1, 2, 2015, 31, 1, 2015));
console.log(libraryFine(31, 12, 2015, 1, 1, 2015));
console.log(libraryFine(1, 3, 2000, 1, 2, 2000));
