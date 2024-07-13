function fibonacci(number){
    if(number<0)return [];
    if(number===0)return [0];
    if(number===1)return [0,1];

    var num = [0,1];

    for(let i = 2;i<=number;i++){
        num.push(num[i-1]+num[i-2]);
    }
    return num;
}

console.log(fibonacci(15));