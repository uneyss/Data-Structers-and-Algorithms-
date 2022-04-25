/* 
    Reverse Array
*/


let array = [1, 2, 3, 4];
function reverseArray(a) {
  let reverse = [];

  for (let i of a) {
    reverse = i + reverse;
  }
  return reverse;
}

function reverse(x){
    return x.reverse().toString()
}

console.log("Output",reverseArray(array))
console.log("Output",reverse(array))