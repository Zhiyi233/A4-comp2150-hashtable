//---------------------------------------
// CLASS: Dictionary
//
// Author: Zhiyi Chen,7863368
//
// Remarks: This class is to build a dictionary to store some keys
//-----------------------------------------
"usu strict";
let Hashable=require('./Hashable.js');
let LinkedList=require('./LL.js');

class Dictionary{
    constructor(){
        if(arguments.length==0){
            this.DictionarySize=-1;
        }else if(arguments.length==1){
            this.DictionarySize=arguments[0];
            this.entry = new Array(this.DictionarySize);
            this.entryCount=0;
        }else{
            console.log("Too many arguments!");
        }
    }

    /*this method take a hashable key k and a value v and there are two conditions for this method:
    1. if the k is not existed in the dictionary, add v into the dictionary
    2. if the k already exists, then replace the current v with the new v
    */
    put(k,v){
        if(k instanceof Hashable ||('hashVal' in k && 'equals' in k)){
            let position=k.hashVal() % this.DictionarySize;
            if(this.entry[position]){ //if there is something on the index,we do not need to create a new ll object
                //now check if k is exists or not
                if(this.contains(k)){
                    //replace the v with new version
                    this.entry[position].replace(k.keyField,v);
                   //console.log("replace a new v!")
                }else{
                    //there is no such k in ll just insert a new node
                    this.entry[position].insert(k.keyField,k.valField);
                    //console.log("insert a new node")
                }
            }else{
                //there is nothing in such positon of hash table
                this.entry[position] = new LinkedList(); //create a new linked list
                this.entry[position].insert(k.keyField,k.valField); //insert current k 

            }
            this.entryCount++; //every time after put a new 
           // this.entry[position].print();
        }else{
            throw new Error("The k parameter type is wrong");
        }       
    }

    get size(){
        return this.DictionarySize;
    }

    /*This method will take a key k, and return its associated value v in the dictionary
    1. if k exists, then return v
    2. if k not exists, then return undefined.
     */
    get(k){
        if(k instanceof Hashable||('hashVal' in k && 'equals' in k)){
            //now we can check if the key k is existed or not
            let position3 = k.hashVal() % this.DictionarySize;
            if(this.contains(k)){
                //true, and k already exists, search the key k from the ll of the position of the ll
                return this.entry[position3].getValueOfKey(k.keyField);
            }else{//k is not exists
                return undefined;
            }
        }else{
            throw new Error("The k parameter type is wrong");
        }
    }

    //This method will return a boolean to decide whether there is a key k in the dictionary 
    contains(k){
        if(k instanceof Hashable||('hashVal' in k && 'equals' in k)){
            let result;
            let position2=k.hashVal() % this.DictionarySize;
            if(this.entry[position2]){
                 result = this.entry[position2].find(k.keyField);
            }else{
                return false;
            }
            return result;
        }else{
            throw new Error("The k parameter type is wrong");
        }
    }

    //This method returns a boolean depending on whether the dictionary is empty or not.
    isEmpty(){
        return (this.entryCount === 0);
    }
}

module.exports = Dictionary;
