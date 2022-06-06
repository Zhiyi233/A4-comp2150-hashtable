//---------------------------------------
// CLASS: Node
//
// Author: Zhiyi Chen,7863368
//
//-----------------------------------------
"use strict";

class Node {
    constructor(data,value,next) {
        if (arguments.length == 1) {
            this._data = data;
            this._value=value;
            this._next = null;
        } else if (arguments.length >= 3) {
           this._data = data;
           this._value=value;
            this._next = next;
        } else {
            this._data = -1;
            this._next = null;
        }
    }    

    print() {
        console.log(this._data+this._value);
    }

    

    get getData() {
        return this._data;
    }

    set setData(v){
        return this._value=v;
    }

    get value(){
        return this._value;
    }

    get next() {
        return this._next;
    }

    get gethead(){
        return this.head;
    }

}

module.exports = Node;