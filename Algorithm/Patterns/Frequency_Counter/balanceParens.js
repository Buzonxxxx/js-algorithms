/* eslint-disable no-plusplus */
// interview question
// parentheses are balance or not?

// [reduce]
const balanceParens = (string) => !string.split('').reduce((previous, char) => {
  if (char === '(') {
    previous += 1;
  }
  if (char === ')') {
    previous -= 1;
  }
  return previous;
}, 0);
console.log(balanceParens(')((((((())))))'));

// [frequencty counter]
const balanceParens2 = (string) => {
  const arr = string.split('');
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  }
  if (result['('] === result[')']) return true;
  return false;
};

console.log(balanceParens2(')((((((())))))'));
