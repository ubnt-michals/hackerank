'use strict';

function getMoneySpent(keyboards, drives, b) {
  keyboards.sort();
  drives.sort();

  if (keyboards[0] + drives[0] > b) {
    return -1;
  }

  let total = 0;

  for (let i = 0; i < keyboards.length; i++) {
    const keyboard = keyboards[i];
    for (let j = 0; j < drives.length; j++) {
      const drive = drives[j];
      const s = keyboard + drive;
      if (s > total && s <= b) {
        total = s;
      }
    }
  }

  return total;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([4], [5], 5));
