'use strict';

function countingValleys(n, s) {
  let level = 0;
  let valleyCounter = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === 'U') {
      level += 1;
    } else {
      if (level === 0) {
        valleyCounter++;
      }
      level -= 1;
    }
  }

  return valleyCounter;
}

console.log(countingValleys(0, 'UDDDUDUU'));
console.log(countingValleys(0, 'UDDDUDUUDDDUUU'));
console.log(countingValleys(0, 'UDDDUDUUDDDUUUUUUDUDDDDU'));
