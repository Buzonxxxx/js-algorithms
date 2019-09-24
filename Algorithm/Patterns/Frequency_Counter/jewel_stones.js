
const numJewelsInStones = (J, S) => {
  const result = {};
  for (let i = 0; i < S.length; i++) {
    if (!result[S[i]]) {
      result[S[i]] = 1;
    } else {
      result[S[i]] = result[S[i]] + 1;
    }
  }
  let sum = 0;
  for (let i = 0; i < J.length; i++) {
    if (result[J[i]]) {
      sum += result[J[i]];
    }
  }
  return sum;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
