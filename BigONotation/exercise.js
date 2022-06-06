// O(n) -> Kaç verirsek verelim yazdırıcak. 
function bigon(n){
    for(let i=0; i < n; i++){
        console.log("Big O N değerleri yazdırılıyor: ", i)
    }
}

// O(n^2)
function bigon2(n,j){
    for(let i=0; i < n; i++){
        console.log("Big O N değerleri yazdırılıyor: i = ", i)
        for(let j=0; j < n; j++){
            console.log("Big O N değerleri yazdırılıyor: j = ", j)
        }
    }

}

// O(log n)
function logn(n){
    while (n > 1) {
        n = Math.floor(n/2)
        console.log("Log n değerleri yazdırılıyor: n",n)
    }
}

// O(n log(n))
function nlogn(n){
    lim = n
    while (n > 1){
        n = Math.floor(n/2)
        for(let i = 0; i < lim; i++){
            console.log(i)
        }
    }
}

// O(n!)
function nfactorail(n){
    if(n == 0){
        return console.log("0 a eşit",n)
    }
    else{
        for(let i = 0; i < n; i++){
            console.log(i)
            nfactorail(n-1)
        }
    }
}

bigon(5)
bigon2(5)
logn(100)
nlogn(16)
console.log(nfactorail(5))