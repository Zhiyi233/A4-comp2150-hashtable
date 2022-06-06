//---------------------------------------
// CLASS: HuffmanTree
//
// Author: Zhiyi Chen,7863368
//
// Remarks: A class that can create a binary tree . It can traverse the binary tree and find a particular character of the tree.
//-----------------------------------------
"use strict";
let TreeNode=require('./TreeNode.js');

class HuffmanTree{
    constructor(){
        this.root=null;
    }

    //This method will create a new tree with the one node(leaf node)
    //The two parameters are a single character, and the weight of this tree
    createNewTree(newChar,newWeight){
        let newNode = new TreeNode(newChar,newWeight);
        this.root = newNode;
        return newNode;
    }

    //Combine two trees to create a new tree
    //the new tree will has a new node and two children
    //the parameters are the left tree and right tree
    combinNewTree(leftTree,rightTree){
        //first we have to create a new node with no single character
        let combinedTree = new TreeNode();
        this.root = combinedTree;
        //insert the two trees into this new node as its sub trees
        return combinedTree.combineNode(combinedTree,leftTree,rightTree);
    }

    //This method will compare two tree through their weight
    //and it will return if the parameter tree comes before (+1) or after (-1)
    compareTo(comparedT){
        if(comparedT.root._weight < this.root._weight ){
            //the parameter tree should come first
            return 1;
        }else if(comparedT.root._weight > this.root._weight){
            //come before
            return -1;
        }else { //now their weights are equal, we have to check which tree has a smaller character
    
            
        }
    }

    //this method will search a target label of a tree
    //it returns the node of that label
    presearch(node,labelValue){
        if(node != null){
            //check the label
            if(node._value == labelValue){
                return node;
            }
        }

        let resultNode;
        if(node.left != null){
            resultNode = this.presearch(node.left,labelValue);
            if(resultNode != null){
                return resultNode;
            }
        }
        if(node.right != null){
            resultNode = this.presearch(node.right,labelValue);
            if(resultNode != null){
                return resultNode;
            }
        }
        return resultNode;
    }

    //This method will traverse the binary tree in pre-order, and it will get all the labels in that tree
    traversePre(tree){
        tree.traverse(tree);
        console.log("check it");
    }
} 

module.exports = HuffmanTree;
