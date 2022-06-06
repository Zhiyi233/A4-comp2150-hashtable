"use strict";
let LinkedList = require('./LL.js');
let IntItem = require('./IntItem.js');

let ll = new LinkedList();
let item = new IntItem(2);
// added after class -- another item to show real insertion.
let item2 = new IntItem(3);
let item3=new IntItem(12);
ll.insert(item);
ll.insert(item2);
ll.insert(item3);
console.log(ll);
ll.print();
