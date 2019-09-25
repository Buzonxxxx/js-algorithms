/* eslint-disable no-plusplus */
// interview question
// parentheses are balance or not?
const balanceParens = (string) => !string.split('').reduce((previous, char) => {
  if (char === '(') return ++previous;
  if (char === ')') return --previous;
  return previous;
}, 0);
console.log(balanceParens(')((((((())))))'));
