'use strict';

// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
  arr.sort((a, b) => a - b);
  const result = [];

  while (arr.length) {
    let c = 1;
    const min = arr.shift();

    while (arr.length && min === arr[0]) {
      c++;
      arr.shift();
    }

    result.push(c + arr.length);
  }

  return result;
}

function arrayEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

console.assert(arrayEqual(cutTheSticks([1, 13, 3, 8, 14, 9, 4, 4]), [8, 7, 6, 4, 3, 2, 1]));
console.assert(arrayEqual(cutTheSticks([3, 2, 1]), [3, 2, 1]));
console.assert(arrayEqual(cutTheSticks([1, 1, 1]), [3]));
console.assert(arrayEqual(cutTheSticks([10]), [1]));
console.assert(arrayEqual(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]), [8, 6, 4, 1]));
