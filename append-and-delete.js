'use strict';

function appendAndDelete(s, t, k) {
  let index = 0;
  while (s[index] && t[index] && s[index] === t[index]) {
    index += 1;
  }

  const l = s.substring(0, index).length;
  k -= t.length - l;
  k -= s.length - l;

  if (k >= 0 && (k % 2 === 0 || l === 0 || (l === t.length && k >= t.length*2))) {
    return 'Yes';
  }

  return 'No';
}

console.log(appendAndDelete('123', '456', 6));
console.log(appendAndDelete('hackerhappy', 'hackerrank', 9));
console.log(appendAndDelete('aba', 'aba', 7));
console.log(appendAndDelete('aba', 'aba', 8));
console.log(appendAndDelete('aba', 'aba', 1));
console.log(appendAndDelete('ashley', 'ash', 2));
