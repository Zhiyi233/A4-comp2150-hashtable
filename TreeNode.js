
//---------------------------------------
// CLASS: TreeNode
//
// Author: Zhiyi Chen,7863368
// Remarks: A class for build a binary tree
//-----------------------------------------
"use strict";

class TreeNode{
    constructor(){
        if(arguments.length == 2){  //create leaf node with a single char and weight 
            this._value = arguments[0];
            this._weight = arguments[1];
            this.left = null;
            this.right = null;
        }else if(arguments.length == 0){ 
            this._weight = 0;
            this.left = null;
            this.right = null;
        }
    }

    get weight(){
        return this._weight;
    }

    get label(){
        return this._value;
    }

    combineNode(node,newNode1,newNode2){
        node.left = newNode1;
        node.right = newNode2;
        node._weight = newNode1._weight+newNode2._weight;

        return node;
    }

    traverse(node){
        if(node != null){
            if(node._value != undefined){
                console.log("visit:"+node._value);
                /*if(Char === undefined ){
                    Char = node._value;
                    //node.storeChar(Char);
                    //console.log("check");
                }else if(Char == D){
                    console.log('IS D now');
                    if(node._value < currentSmallest){ //compare two characters
                        Char = node._value;
                        console.log(Char);
                    }
                }*/
            }
           
            this.traverse(node.left);

            this.traverse(node.right);
        }
    }

    
}

module.exports = TreeNode;