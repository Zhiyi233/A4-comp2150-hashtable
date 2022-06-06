//---------------------------------------
// Name: testfile
//
// Author: Zhiyi Chen,7863368
//
//-----------------------------------------
"use strict";
let assert = require('assert');
let IntHash=require('./IntHash.js');
let StringHash=require('./StringHash.js');
let Dictionary=require('./Dictionary.js');

let testTime=0;
let testFailed=0;
let testSucceed =0;

function main(){
    testEmptyDictionary();
    testOneElement();
    testReplaceValue();
    testCollision();
    testFullDictionary();
    console.log("Test time is: "+testTime);
    console.log("Test passed time is: "+testSucceed);
    testFailed=testTime-testSucceed;
    console.log("Test Failed: "+testFailed);
}

function testEmptyDictionary(){
    console.log("------Testing an empty dictionary with operations:-------")
    testTime++;
    let d1 = new Dictionary(5);
    let k1 = new IntHash(1,1);
    let k2 = new StringHash("abc",10);
    
    assert(d1.get(k1) === undefined);
    assert(d1.get(k2) === undefined);
    console.log("Testing of get(k) is passed!");
    
    assert(d1.contains(k1) === false);
    assert(d1.contains(k2) === false);
    console.log("Testing of contains(k) is passed!");

    assert(d1.isEmpty());
    console.log("Testing of isEmpty() passed!");
    testSucceed++;
}

function testOneElement(){
    console.log("\n------Testing a dictionary that only has one element:--------");
    testTime++;
    let d1 = new Dictionary(5);
    let k1 = new IntHash(1,1);

    d1.put(k1,k1.valField);
    assert(d1.get(k1) === 1);
    console.log("Pass the test with get(k)!")

    assert(d1.contains(k1) === true);
    console.log("Pass the test of contians(k)!");
    testSucceed++;
}

//this method will test if the the code work appropriate with a dictionary that has put two same k with different value v
function testReplaceValue(){
    console.log("\n-----Testing a dictionary that put same k with different value v:--------");
    testTime++;
    let d1 = new Dictionary(10);
    let k1 = new IntHash(1,10);
    let k2 = new IntHash(1,12);

    d1.put(k1,k1.valField);
    d1.put(k2,k2.valField);

    assert(d1.get(k1) === 12); //the k's asscoiated value v should be the v of k2 now, which is 12
    console.log("The existed k's v has been replaced successfully!");
    testSucceed++;
}

//this method will test if two different keys have the same hashVal, then they will be inserted into the linked list 
function testCollision(){
    console.log("\n-----Testing a dictionary if it will insert two different keys but has same hashVal into a linked list--------");
    testTime++;
    let d1 = new Dictionary(10);
    let k1 = new IntHash(3,10);
    let k2 = new StringHash("abc",120);
    let k3 = new IntHash(13,11);

    //all of the keys below's hashVal is 3
    d1.put(k1,k1.valField);
    d1.put(k2,k2.valField);
    d1.put(k3,k3.valField);

    assert(d1.get(k1) === 10);
    assert(d1.get(k2) === 120);
    assert(d1.get(k3) === 11);
    console.log("Testing of get(k) when there are some different k in the ll is passed!");

    assert(d1.contains(k1) === true);
    assert(d1.contains(k2) === true);
    console.log("Pass test of contains(k)!");
    testSucceed++;
}

//this method will test that there is already add something on every index of the array 
function testFullDictionary(){
    console.log("\n------Testing if we can get what we want in a full dictionary:--------");
    let d1 = new Dictionary(4);
    let k1 = new IntHash(0,10);
    let k2 = new StringHash("abc",120);
    let k3 = new IntHash(1,11);
    let k4 = new StringHash("dz",222);
    testTime++;

    d1.put(k1,k1.valField);
    d1.put(k2,k2.valField);
    d1.put(k3,k3.valField);
    d1.put(k4,k4.valField);

    assert(d1.get(k1) === 10);
    assert(d1.get(k2) === 120);
    assert(d1.get(k3) === 11);
    assert(d1.get(k4) === 222);
    console.log("Passed all the asserts!");
    testSucceed++;
}

main();