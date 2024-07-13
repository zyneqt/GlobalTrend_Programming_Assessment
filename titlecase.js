function capital(string) {
    return string.split(" ").map(ele => ele[0].toUpperCase() + ele.slice(1)).join(" ");
}

let a = "my name is vicky";
console.log(capital(a));