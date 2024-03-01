"use strict";

const findBalancedSubstring = (S) => {
  S = S.toLowerCase();

  let result = [];

  for (let i = 0; i < S.length - 1; i++) {
    let charCount = new Map();
    charCount.set(S[i], 1);
    let distinctCount = 1;

    for (let j = i + 1; j < S.length; j++) {
      const currentChar = S[j];

      if (!charCount.has(currentChar)) {
        if (distinctCount < 2) {
          charCount.set(currentChar, 1);
          distinctCount++;
        } else {
          break;
        }
      } else {
        charCount.set(currentChar, charCount.get(currentChar) + 1);
      }

      if (distinctCount === 2 && charCount.size === 2) {
        const values = Array.from(charCount.values());
        if (values[0] === values[1]) {
          const balancedSubstring = S.substring(i, j + 1);
          if (balancedSubstring.length >= 4) {
            if (
              result.length === 0 ||
              balancedSubstring.length > result[0].length
            ) {
              result = [balancedSubstring];
            } else if (balancedSubstring.length === result[0].length) {
              result.push(balancedSubstring);
            }
          }
        }
      }
    }
  }

  return result;
};

console.log(findBalancedSubstring("cabbacc"));
console.log(findBalancedSubstring("abababa"));
console.log(findBalancedSubstring("aaaaaaa"));
