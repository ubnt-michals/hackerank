'use strict';

const toDigits = (v) => {
  const res = [];
  while (v > 0) {
    const d = v % 10;
    res.unshift(d);
    v = (v - d) / 10;
  }

  return res;
};

// simple multiplication
const mul = (a, b) => {
  const m = [];
  let len = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    const mm = [];
    for (let j = 0; j < m.length; j++) {
      mm.push(0);
    }
    let carry = 0;
    for (let j = b.length - 1; j >= 0 ; j--) {
      const v = (a[i] * b[j]) + carry;
      carry = Math.floor(v / 10);
      mm.push(v % 10);
    }
    if (carry !== 0) {
      mm.push(...toDigits(carry))
    }
    if (mm.length > len) {
      len = mm.length;
    }
    m.push(mm);
  }

  const r = [];
  let carry = 0;
  for (let i = 0; i < len; i++) {
    let acc = 0;
    for (let j = 0; j < m.length; j++) {
      acc += (m[j][i] || 0)
    }
    const v = acc + carry;
    carry = Math.floor(v / 10);
    r.push(v % 10)
  }

  if (carry !== 0) {
    r.push(...toDigits(carry))
  }

  return r.reverse();
};

function extraLongFactorials(n) {
  let fact = [1];
  while (n > 1) {
    fact = mul(fact, toDigits(n));
    n -= 1;
  }

  return fact.join('');
}

console.log(toDigits(1000));

console.log(mul([1], [2]));
console.log(mul([9, 9, 9], [9, 9]));
console.log(mul([1, 1, 1], [2]));

console.log(extraLongFactorials(1));
console.log(extraLongFactorials(2));
console.log(extraLongFactorials(3));
console.log(extraLongFactorials(4));
console.log(extraLongFactorials(5));
console.log(extraLongFactorials(6));
console.log(extraLongFactorials(7));
console.log(extraLongFactorials(11));
console.log(extraLongFactorials(25));
console.log(extraLongFactorials(10));
console.log(extraLongFactorials(99));
