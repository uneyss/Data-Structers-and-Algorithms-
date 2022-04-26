// 
function simpleAdding(num){
    return (num === 1) ? num : num + simpleAdding(num - 1)
}

console.log(simpleAdding(5))