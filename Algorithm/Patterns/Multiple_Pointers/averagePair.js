/**
 * Given a sorted array of integers, if there is a pair in the array where the average of the pair equals
 * the target average.
 *
 * Time: O(N)
 *
 * 1. get pair average of first(left) and last element(right)
 * 2. if pair average = target, return true
 * 3. if pair average < target, left++
 * 4. if pair average > target, right--
 */

const averagePair = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (arr[left] < arr[right]) {
    const average = arr[left] + arr[right] / 2;
    if (average === target) {
      return true;
    }
    if (average < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return false;
};
console.log(averagePair([1, 2, 3], 2.5));// true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
