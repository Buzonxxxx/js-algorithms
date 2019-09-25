// fill, join: 填滿array
const address = new Array(39).fill(0).join('') + 1;
console.log(address, address.length);
// 0000000000000000000000000000000000000001 40

// join: array to string
const a = [1, 1, 1];
console.log(a.join(''));
// 111
