/**
 * Taking two strings and check whether the characters in the first string form a subsequence of the characters 
 * in the second string, without order change
 * Time O(N+M)
 */


const isSubsequence = (str1, str2) => {

};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'string')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
