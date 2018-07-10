'use strict';

let p = null;

// matching-anything-but-new-line
p = /^(.{3}\.){3}.{3}$/g;

console.assert(p.test('123.456.abc.def'));
console.assert(!p.test('1123.456.abc.def'));

// matching-digits-non-digit-character
p = /(\d\d\D){2}\d{4}/;

console.assert(p.test('06-11-2015'), '06-11-2015');
console.assert(p.test('10a10.2015452254'), '10a10.2015452254');

// matching-whitespace-non-whitespace-character
p = /(\S\S\s){2}\S{2}/;

console.assert(p.test('12 11 15'));

// matching-word-non-word
p = /\w{3}\W\w{10}\W\w{3}/;

console.assert(p.test('www.hackerrank.com'));

// matching-start-end/problem
p = /^\d\w{4}\.$/;

console.assert(p.test('0qwer.'));
