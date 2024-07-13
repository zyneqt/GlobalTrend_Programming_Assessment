function flatten(newarray){
    let newflatten = [];
    newarray.forEach(element => {
        if(Array.isArray(element)){
            newflatten = newflatten.concat(flatten(element));
        }
        else {
            newflatten.push(element);
        }
    });
    return newflatten;
}


let arr = [1,[2,3,4],5];
console.log(flatten(arr));