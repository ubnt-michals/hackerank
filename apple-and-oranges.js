'use strict';

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCounter = 0;
  let orangeCounter = 0;

  for (let i = 0; i < apples.length; i++) {
    const apple = apples[i];
    const d = a + apple;
    if (d >= s && d <= t) {
      appleCounter += 1;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    const orange = oranges[i];
    const d = b + orange;
    if (d <= t && d >= s) {
      orangeCounter += 1;
    }
  }

  console.log(appleCounter);
  console.log(orangeCounter);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
