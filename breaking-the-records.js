'use strict';

// Complete the breakingRecords function below.
function breakingRecords(scores) {
  let best = scores[0];
  let worst = scores[0];

  let bc = 0 , wc = 0;
  for (let i = 1; i < scores.length; i++) {
    const score = scores[i];
    if (score < worst) {
      wc += 1;
      worst = score;
    } else if (score > best) {
      bc += 1;
      best = score;
    }
  }

  return [bc, wc];
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));


