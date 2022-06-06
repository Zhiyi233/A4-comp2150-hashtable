//---------------------------------------
// CLASS: main
//
// Author: Zhiyi Chen,7863368
//
//-----------------------------------------
"use strict";
let Dictionary=require('./Dictionary.js');
let HuffmanEncoder=require('./HuffmanEncoder.js');

let hf =new HuffmanEncoder("hamlet.txt");
let storeD =new Dictionary(100); //create a dictionary for storing characters
hf.calPercentage(storeD); 
hf.encode(storeD.entry); //do encoding and produce the output file