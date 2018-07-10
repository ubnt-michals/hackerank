'use strict';

function designerPdfViewer(h, word) {
  const a = 'a'.charCodeAt(0);
  let max = 1;
  for (const w of word) {
    const index = w.charCodeAt(0) - a;
    if (h[index] > max) {
      max = h[index];
    }
  }

  return max * word.length;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'));
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'));
