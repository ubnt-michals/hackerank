'use strict';

function squares(a, b) {
  const a2 = Math.ceil(Math.sqrt(a));
  const b2 = Math.floor(Math.sqrt(b));

  if (a2 > b2) {
    return 0;
  }

  return b2 - a2 + 1;
}

console.log(squares(3, 9));
console.log(squares(10, 20));
console.log(squares(100, 130));
console.log(squares(17, 24));
console.log(squares(0, 99));
