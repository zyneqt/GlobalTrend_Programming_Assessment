function remEven(arr){
    return arr.filter(num=>num%2!==0);
}

var arr = [1,2,3,4,5,6,7,8,9]
console.log(remEven(arr));