/**
 * Accept a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 *
 * 1. Use rest parameter to put arguments in array
 * 2. loop array and put each element/count in object
 * 3. if object length === array length, return false(no duplicate), else return true(has duplicate)
 */

const areThereDuplicates = (...args) => {
  const result = {};
  args.forEach((el) => {
    if (!result[el]) {
      result[el] = 1;
    } else {
      result[el] += 1;
    }
  });
  // no duplicate
  if (Object.keys(result).length === args.length) {
    return false;
  }
  // has duplicate
  return true;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
