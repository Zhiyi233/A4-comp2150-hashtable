//---------------------------------------
// CLASS: LinkedList
//
// Author: Zhiyi Chen,7863368
//
// Remarks:a class for linked list that can help us to build a hash table
//-----------------------------------------
"use strict";
let Node = require('./Node.js'); // use Node in this file. 

class LinkedList {

    constructor() {
        this._head = null;
    }

    insert ( key,value ) { 
        this._head = new Node ( key,value, this._head );
    }
    
    find (keyvalue){
        let found=false;
        let current = this._head;
        
        while(current.getData !== keyvalue){
            current = current.next;
            if(current === null){
                return (found = false);
            }
        }
        if(current.getData===keyvalue){
            found = true;
        }

        return found;
    }

    getValueOfKey(keyvalue){
        let current = this._head;
        while(current.getData !== keyvalue){
            current = current.next;
        }
        return (current.value); //now we get the associated value with k
    }

    replace(keyvalue,v){
        let current = this._head;
        while(current.getData !== keyvalue){
            current = current.next;
        }
        if(current.getData === keyvalue){
            current.setData=v;
        }
        return current.value;
    }

    print() { 
       let current=this._head;
       while(current!==null){
           current.print();
           current = current.next;
       }

    }

    isEmpty() {
        return (this._head === null);
	}
}

module.exports = LinkedList;
