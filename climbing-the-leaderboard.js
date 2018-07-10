'use strict';

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  const ranks = [];

  let lastScore = null;
  let lastRank = 0;
  for (const score of scores) {
    if (lastScore !== score) {
      lastRank += 1;
      lastScore = score;
    }

    ranks.push(lastRank)
  }

  const r = [];
  let index = scores.length - 1;
  for (let i = 0; i < alice.length; i++) {
    const a = alice[i];

    while (index >= 0 && scores[index] < a) {
      index -= 1;
    }

    if (index >= 0) {
      if (scores[index] !== a) {
        r.push(ranks[index] + 1)
      } else {
        r.push(ranks[index])
      }
    } else {
      r.push(1);
    }
  }

  return r;
}

console.log(climbingLeaderboard(
  [10, 9, 6, 1],
  [100]
));
console.log(climbingLeaderboard(
  [1, 1, 1, 1],
  [1]
));
console.log(climbingLeaderboard(
  [100, 100, 50, 40, 40, 20, 10],
  [5, 25, 50, 120]
));
