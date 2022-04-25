/*  
    Find a longest word
*/


const word = "Hello my name is Üneys Ahmet  examples123**"

function longestWord(word){
    let reg = /[^a-zA-Z0-9 ]/g
    let splitWords = word.replace(reg, " ").split(' ')
    let longest = splitWords[0]

    for(let i=0; i<splitWords.length; i++){
        if(splitWords[i].length > longest.length){
            longest = splitWords[i]
        }
    }
    return longest;
}



// WİTH SORT

const str = "Hello second examp1234/*"

function longest(str){
    str = str.match(/[a-z]+/gi)
    return str.sort((a, b) => b.length - a.length)[0]
  }


// console.log("Longest Word :",longestWord(word))
// console.log("Longest Word Second :",longest(str))




/* 
  Given an array of integers, find the sum of its elements.
*/


let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(arr)
function simpleArraySum(ar) {
    let sum = 0
    
    for(let i=0; i<ar.length; i++){
        console.log("Şu Aanda Array'in içerisindeyiz",i)
        sum += ar[i]
    }
    return sum
}


let array = [1,2,3,4]

function reverseArray(a) {
    // Write your code here
    let reverse = []
    
    for(let i of a){
        console.log("Şu Anda for oftayız",i)
        console.log(reverse = i + reverse )
    }
    return reverse
}

// console.log(simpleArraySum(arr))
// console.log(reverseArray(array))

/* 
    Count Objects
    Return a count of the total number of objects  such that . Locked stub code in the editor prints the returned value to

*/


let objects = [
    {x: 1, y: 1},
    {x: 2, y: 8},
    {x: 3, y: 10},
    {x: 4, y: 4},
    {x: 5, y: 2},
]

let objects2 = [
    {x: 1, y: 1},
    {x: 2, y: 8},
    {x: 5, y: 5},
    {x: 4, y: 4},
    {x: 10, y: 10},
]


function calculateObjects(obj){
    let count = 0
    obj.forEach(o => {
        if(o.x == o.y){
            count++
        }
    })
    return count
}

console.log("For First Object Matched :",calculateObjects(objects))
console.log("For Second Object Matched :",calculateObjects(objects2))




let arrays = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
let hold = []
function FindIntersection(strArr) { 
    let firstArr = strArr[0].split(', ')
    let secondArr = strArr[1].split(', ')
    console.log('First :', firstArr)
    console.log('Second :', secondArr)

    for(let i=0; i<firstArr.length; i++){
        console.log("First Arr :", firstArr)
        if(secondArr.includes(firstArr[i])){
            hold.push(firstArr[i])
        }
    }
    return hold.length === 0 ? false : hold.toString()
  }

  

console.log(FindIntersection(arrays))
