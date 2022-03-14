/*
* Write a function to determine if the supplied string is a palindrome
* Eq: radar, racecar, kayak, and redder are all palindromes
* They are spelled the same backwards and forward
 */

// let isPalendrome = function (str) {
//     // let len = str.length;
//     // let start = str.substring(0, Math.floor(len/2) ).toLowerCase();
//     // let end = str.substring(len - Math.floor(len/2)).toLowerCase();
//     // console.log(start, end);
//     let flip = str.split('').reverse().join('');
//     return(str === flip);
// }

// console.log(isPalendrome('radar')); // true 
// console.log(isPalendrome('redder')); // true 
// console.log(isPalendrome('window')); // false 


// function isPermutationPalendrome(inputString) {
//     // create a set to track characters we've seen
//     const charSet = new Set();
    
//     // iterate over each character by splitting into an array
//     inputString.split('').forEach(char => {
      
//       // remove from set if previously added
//       if (charSet.has(char)) {
//         charSet.delete(char);
        
//       // add to set if not already present in set
//       } else {
//         charSet.add(char)
//       }
//     })
  
//     // set should have 0 or 1 entry if is a palindrome
//     return charSet.size <= 1;
//   }

//   console.log(isPermutationPalendrome('racecar'))
//   console.log(isPermutationPalendrome('banana'))
//   console.log(isPermutationPalendrome('superdupers'))

//Bonus recursion 
// recursive palindrome
function isPalendrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalendrome(str.slice(1,-1))
  return false;
}

console.log(isPalendrome('a')) // true
console.log(isPalendrome('matom')) // false
console.log(isPalendrome('rotor')) // true

// module.exports = {isPalendrome, isPermutationPalendrome}

module.exports = {isPalendrome}

