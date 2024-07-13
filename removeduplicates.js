function remDup(arr){
    return [...new Set(arr)]
}

let arr = [1,2,1,4,4,5,6,7,8,8,]
console.log(remDup(arr));