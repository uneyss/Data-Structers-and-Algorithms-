// Recursion Factorial 

const factorial = (x) => {

    console.log(x)
    return (x == 1) ? x : x * factorial(x-1)
}
console.log(factorial(5))

// Without Recursion 

let factbox = 1
let number = 5 

for(let i=1; i<=number; i++){
    console.log("\n i :", i)
    console.log("İşlem Kısmı :", factbox = factbox * i)
    console.log("Factbox :", factbox)
}

console.log("Factorial Without Recursion :", factbox)

// Finding the exponent of a number
function pow(x, n){
    return(n == 1) ? x : (x * pow(x,n - 1))
}
console.log(pow(2,4))