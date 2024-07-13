class hashing{
    constructor(){
        this.map = new Map();
    }

    put(key,value){
        this.map.set(key,value);
    }
    

    get(key){
        return this.map.get(key);
    }

    remove(key){
        return this.map.delete(key);
    }

}


var m = new hashing();

m.put("name","vicky");
m.put("age","22");
console.log(m);
