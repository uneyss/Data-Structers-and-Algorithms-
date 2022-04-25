/* 
  Given an array of integers, find the sum of its elements.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function simpleArraySum(ar) {
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}