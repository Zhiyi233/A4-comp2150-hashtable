//---------------------------------------
// CLASS: HuffmanEncoder
//
// Author: Zhiyi Chen,7863368
//
// Remarks: do all the encoding algorithm by useing dictionary and huffman tree in this class
//-----------------------------------------
"use strict";
let fs = require('fs');
let StringHash=require('./StringHash.js');
let HuffmanTree = require('./HuffmanTree.js');

class HuffmanEncoder{
    #_in
    #_contents
    #_treeNum
    constructor(inputFile){
        this.#_in = inputFile;
        this.#_treeNum=0; //count the number of trees that we have constructed
        this.#_contents = fs.readFileSync(inputFile,"utf8");
        this._outPutFile = inputFile + ".huff";
        this._str="Characters  Weight"+"\n";
    }

    get fileName(){
        return this.#_in;
    }

    get getContents(){
        return this.#_contents;
    }

    get treeNum(){
        return this.#_treeNum;
    }

    set setTreeNum(n){
        return this.#_treeNum+=n;
    }

    //This method will calculate the frequencies for all the characters in the hamlet.txt
    //and it will store all the characters and their frequencies in a dictionary
    //In this method, each time after it calculated a percentage of each character, it will call put(k,v) once
    //and it will also call encode() method to create a new huffman tree
    calPercentage(storedDic){
        let obj = {};
        let str=this.getContents;
        for(let i = 0; i < str.length;i++){
            if(!obj[str.charAt(i)]){
                obj[str.charAt(i)] = 1;
            }else{
                obj[str.charAt(i)]++;
            }
        }
        let char = '';
        let count = 0;
        let percentage=0;
        //let storedDic = new Dictionary(100);
        for(let j in obj){
            count = obj[j];
            char = j;
            percentage = count/this.getContents.length;
            //now put all the characters with their frequencies into the dictionary
            let temporaryK = new StringHash(char,percentage);
            storedDic.put(temporaryK,temporaryK.valField);
            this.constructTree(temporaryK.keyField,temporaryK.valField); //construct a tree for each character from the hamlet file
            //console.log(temporaryK.keyField+" "+" "+temporaryK.valField);
            this._str  += temporaryK.keyField+"           "+temporaryK.valField+"\n";
            this.setTreeNum = 1;
        }
    }

    //This method will be called to built a tree for each character
    constructTree(newC,newWeight){
        let newHf = new HuffmanTree();
        return newHf.createNewTree(newC,newWeight);
    }

    //This method should open a new output file,and write the codes for the Huffman algorithm to the output file.
    encode(){
        fs.writeFileSync(this._outPutFile,this._str);
        fs.writeFileSync("out.txt",this._str);
    }
}

module.exports = HuffmanEncoder;


    

