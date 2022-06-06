"use strict";
let Entity = require('./Entity.js'); 

class IntItem extends Entity {
    constructor(d) {
        super();
        this.data = d;
    }

    print() {
        console.log(this.data);
    }

}

module.exports = IntItem;