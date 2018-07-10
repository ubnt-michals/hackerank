'use strict';

// Complete the solve function below.
function solve(year) {
  let isLeap = false;

  if (year <= 1917) {
    isLeap = year % 4 === 0;
  } else if (year === 1918) {
    // special case, calendar switch
    return '26.09.1918';
  } else {
    isLeap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  }

  return isLeap ? `12.09.${year}` : `13.09.${year}`;
}

console.log(solve(1918));
console.log(solve(2017));
console.log(solve(2016));
console.log(solve(1800));
