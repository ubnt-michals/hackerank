'use strict';

function isMagic(s) {
  const r1 = s[0][0] + s[0][1] + s[0][2];
  const r2 = s[1][0] + s[1][1] + s[1][2];
  const r3 = s[2][0] + s[2][1] + s[2][2];

  const s1 = s[0][0] + s[1][0] + s[2][0];
  const s2 = s[0][1] + s[1][1] + s[2][1];
  const s3 = s[0][2] + s[1][2] + s[2][2];

  const d1 = s[0][0] + s[1][1] + s[2][2];
  const d2 = s[0][2] + s[1][1] + s[2][0];

  return r1 === r2 && r2 === r3 && r3 === s1 && s1 === s2 && s2 === s3 && s3 === d1 && d1 === d2;
}

function calcCost(s, ms) {
  let total = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      total += Math.abs(s[i][j] - ms[i][j])
    }
  }

  return total;
}

function rotate(m) {
  return [
    [m[2][0], m[1][0], m[0][0]],
    [m[2][1], m[1][1], m[0][1]],
    [m[2][2], m[1][2], m[0][2]],
  ];
}

const m1 = [
  [8, 3, 4],
  [1, 5, 9],
  [6, 7, 2],
];

const m2 = rotate(m1);
const m3 = rotate(m2);
const m4 = rotate(m3);

const mm1 = [
  [4, 3, 8],
  [9, 5, 1],
  [2, 7, 6],
];

const mm2 = rotate(mm1);
const mm3 = rotate(mm2);
const mm4 = rotate(mm3);

const magics = [m1, m2, m3, m4, mm1, mm2, mm3, mm4];

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
  let min = Infinity;
  for (const magic of magics) {
    console.assert(isMagic(magic));
    const cost = calcCost(s, magic);
    min = cost < min ? cost : min;
  }

  return min;
}

console.log(formingMagicSquare([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
]));
console.log(formingMagicSquare([
  [4, 5, 8],
  [2, 4, 1],
  [1, 9, 7],
]));
