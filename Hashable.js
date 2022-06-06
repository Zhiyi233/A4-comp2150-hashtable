//---------------------------------------
// Class: Hashable
//
// Author: Zhiyi Chen,7863368
//
// Remarks: an abstract class for IntHash and StringHash enfore them to implement hashVal() and equals()
//-----------------------------------------
"use strict";

class Hashable{
    constructor(){
        if (this.constructor === Hashable) {
            throw new Error("don't create an abstract class.");
        } else {
            
        }
    }

    //two abstract methods below

    hashVal(){
        throw new Error("missing hashVal in a concrete class.");
    }

    equals(x){
        throw new Error("missing equals in a concrete class.");
    }
}

module.exports=Hashable;