'use strict';

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  const result = (x2 - x1) / (v1 - v2);

  console.log(result >= 0 && Number.isInteger(result) ? 'YES' : 'NO');
}

kangaroo(0, 3, 4, 2);
