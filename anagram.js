function isAnagram(string1,string2){
    if (string1.split("").sort().join("") === string2.split("").sort().join(""))return true;
    else return false;
}

let a = "tea";
let b = "eat";
console.log(isAnagram(a,b));