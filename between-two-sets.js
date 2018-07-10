'use strict';

const gcd = (a, b) => {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }

  return a;
};

const lcm = (a, b) => {
  let d = gcd(a, b);
  let acc = 1;
  while(d !== 1) {
    a /= d;
    b /= d;
    acc *= d;
    d = gcd(a, b);
  }

  return acc * a * b;
};

function getTotal(a, b) {
  a.sort();
  b.sort();

  const bMin = b[0];
  let factor = a[0];
  for (let i = 1; i < a.length; i++) {
    if (factor % a[i] !== 0) {
      factor = lcm(factor, a[i]);
    }
  }

  let num = factor;
  let counter = 0;
  while (num <= bMin) {
    counter += 1;
    for (let j = 0; j < b.length; j++) {
      if (b[j] % num !== 0) {
        counter -= 1;
        break;
      }
    }
    num += factor;
  }

  return counter;
}

console.assert(gcd(42, 56) === 14, 'gcd works');
console.assert(gcd(54, 24) === 6, 'gcd works');
console.assert(gcd(1, 1) === 1, 'gcd works');
console.assert(gcd(2, 1) === 1, 'gcd works');
console.assert(gcd(2, 7) === 1, 'gcd works');
console.assert(lcm(2, 7) === 14, 'lcm works');
console.assert(lcm(12, 32) === 96, 'lcm works');
console.log(getTotal([4, 2], [16, 32, 96]));
