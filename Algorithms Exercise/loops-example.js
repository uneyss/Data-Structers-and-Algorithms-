/* 
    Prints odd numbers between 20 and 50 to the screen
*/

function oddNumbers() {
  for (let i = 20; i <= 50; i++) {
    if (i % 2 == 1) {
      console.log("Odd Numbers 20 - 50 : ", i);
    }
  }
}

/* 
    Print numbers from 100 to 20, divisible by 3 and 7, from greatest to least.
*/

function calculate() {
  for (let i = 100; i >= 20; i--) {
    if (i % 3 === 0 && i % 7 === 0) {
      console.log("This numbers divisible by 3 and 7 : ", i);
    }
  }
}

/* 
    Find the largest number
*/

// For Loop
let arr = [1, 10, 5, 20, 12, 18, 20];
let largest = arr[0];

function largestNumber() {
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  console.log("Largest number is : ", largest);
}

// For Eaach
let arr2 = [1, 5, 20, 40, 10, 30];
let x = 0;

function largestNumberForEach() {
  arr2.forEach((element) => {
    if (x < element) {
      x = element;
    }
  });
  console.log("Largest number For Each : ", x);
}

oddNumbers();
calculate();
largestNumber();
largestNumberForEach();

/* 
    Find if number is prime or not
*/

let a = 1;
let number = 3;
let flag = 0;

while (a < number - 1) {
  a++;
  if (number % a === 0) {
    flag = 1;
    console.log("Flag 1 e eşitlendi döngü bitiyor.");
    break;
  }
}

if (flag === 0) {
  console.log("Asal sayıdır.");
} else {
  console.log("Asal değildir.");
}


/* 
    The multiplication table
*/

for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        console.log("Table: ", i*j)
    }
    console.log("\n")
}

for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        console.log("*")
    }
    console.log("\n")
}