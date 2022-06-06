// Big O N -> Kaç verirsek verelim yazdırıcak. 
function bigon(n){
    for(let i=0; i < n; i++){
        console.log("Big O N değerleri yazdırılıyor: ", i)
    }
}

function bigon2(n,j){
    for(let i=0; i < n; i++){
        console.log("Big O N değerleri yazdırılıyor: i = ", i)
        for(let j=0; j < n; j++){
            console.log("Big O N değerleri yazdırılıyor: j = ", j)
        }
    }

}

bigon(5)
bigon2(5)
