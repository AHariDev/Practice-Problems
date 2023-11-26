class Node{
    constructor(value){
        this.left = null;
        this.right = null; 
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null; 
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        } else {
            let currNode = this.root; 
            while(true){
                if(value < currNode.value){
                    if(!currNode.left){
                        currNode.left = newNode;
                        return this; 
                    }
                    currNode = currNode.left; 
                } else {
                    if(!currNode.right){
                        currNode.right = newNode; 
                        return this; 
                    }
                    currNode = currNode.right;
                }
            }
        }
    }
    lookup(value){
        let currNode = this.root; 
        while(currNode){
            if(currNode.value === value){
                return true; 
            } else if (value < currNode.value){
                currNode = currNode.left; 
            } else {
                currNode = currNode.right; 
            }
        }
        return false;
    }
    remove(value){
        if(!this.root){
            return false; 
        }
        let currNode = this.root; 
        let parentNode = null; 
        while(currNode){
            if(value < currNode.value){
                parentNode = currNode;
                currNode = currNode.left; 
            } else if(value > currNode.value){
                parentNode = currNode;
                currNode = currNode.right; 
            } else {
                if(!currNode.right){
                    if(!parentNode){
                        this.root = currNode.left;
                    } else {
                        if(currNode.value < parentNode.value){
                            parentNode.left = currNode.left;
                        } else if(currNode.value > parentNode.value){
                            parentNode.right = currNode.left; 
                        }
                    }
                } else if(!currNode.right.left){
                    if(!parentNode){
                        this.root = currNode.left; 
                    } else {
                        currNode.right.left = currNode.left; 
                        if(currNode.value < parentNode.value){
                            parentNode.left = currNode.right; 
                        } else if (currNode.value > parentNode.value){
                            parentNode.right = currNode.right; 
                        }
                    }
                } else {
                    let leftMost = currNode.right.left; 
                    let leftMostParent = currNode.right;
                    while(leftMost.left){
                        leftMostParent = leftMost; 
                        leftMost = leftMost.left; 
                    } 

                    leftMostParent.left = leftMost.right; 
                    leftMost.left = currNode.left; 
                    leftMost.right = currNode.right; 

                    if(!parentNode){
                        this.root = leftMost;
                    } else {
                        if(currNode.value < parentNode.value){
                            parentNode.left = leftMost; 
                        } else if (currNode.value > parentNode){
                            parentNode.right = leftMost;
                        }
                    }
                }

                return true; 
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(173)); //Returns false as expected

function traverse(node){
    const tree = { value : node.value }; 
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree; 
}