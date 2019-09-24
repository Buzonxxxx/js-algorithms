/* 
 * 4.
 * Implement a function called countUniqueValues, which accepts a sorted array, 
 * and counts the unique values in the array. There can be negative numbers in the array, 
 * but it will always be sorted.
 * 
 * i.g. [1,1,1,2,2,3,4,5,6,7,7] => return 7
 * 
 * 
 * loop array and put element and count in object : [1,1,2,3] => {'1': 2, '2': 1, '3': 1}
 * count the object size
 * return size
 */

const countUniqueValues1 = arr => {
  const result = {};
 for (let i = 0; i < arr.length; i++) {
   if(!result[arr[i]]) {
     result[arr[i]] = 1;
   }
   else {
     result[arr[i]] = result[arr[i]] + 1;
   }
 }
 console.log(result)
 return Object.keys(result).length
}

const countUniqueValues2 = arr => {
  // [Use set object]  
  let set =  new Set(arr)
 //  console.log([...set])
  return set.size;
 }
// console.log(countUniqueValues1([1,1,1,2,2,3,4,5,6,7,7]))
// console.log(countUniqueValues2([1,1,1,2,2,3,4,5,6,7,7]))