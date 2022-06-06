"use strict";
let Hashable=require('./Hashable.js');

class StringHash extends Hashable{
    constructor(k,v){
        super();
        this.stringKey=k;
        this.stringVal=v;
    }
    get keyField(){
        return this.stringKey;
    }

    get valField(){
        return this.stringVal;
    }

    hashVal(){
        let p=100;
        let stringHashVal=0;
        for(let i=0;i<this.stringKey.length;i++){
            stringHashVal += this.stringKey.charCodeAt(i) * Math.pow(p,this.stringKey.length-i-1);
        }
        return stringHashVal;
    }

    equals(x){
        return (this.stringKey === x.stringKey);
    }
}

module.exports = StringHash;