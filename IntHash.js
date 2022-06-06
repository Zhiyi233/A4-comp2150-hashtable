"use strict";
let Hashable=require('./Hashable.js');

class IntHash extends Hashable{
    #key //private field key k for int hash
    #value
    constructor(k,v){
        super();
        this.#key=k;
        this.#value=v;
    }
 
    //whose hashVal function is the value of the integer
    hashVal(){
        if(Number.isInteger(this.keyField)){
            return this.#key;
        }else{
            throw new Error("This key is not a int value now!")
        }
    }

    equals(x){
        if(this.hashVal() === x.hashVal()){
            return true;
        }else{
            return false;
        }
    }

    get keyField(){
        return this.#key;
    }

    get valField(){
        return this.#value;
    }
}
module.exports = IntHash;

