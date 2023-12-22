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
    breadthFirstSearch(){
        let currNode = this.root; 
        let list = []; //To store the result (the visited values/nodes)
        let queue = []; //Queue to keep track of the level that we're at to access children
        queue.push(currNode);

        while(queue.length){
            currNode = queue.shift();
            list.push(currNode.value);
            if(currNode.left){ //Is there a left child
                queue.push(currNode.left);
            }
            if(currNode.right){ //Is there a right child
                queue.push(currNode.right); 
            }
        }
        return list; //Returns a list of all the traversed nodes
    }
    breadthFirstSearchRecursive(queue, list){ //Note: BFS is usually implemented iteratively
        if(!queue.length){
            return list;
        }
        let currNode = queue.shift();
        list.push(currNode.value);
        if(currNode.left){ //Is there a left child
            queue.push(currNode.left);
        }
        if(currNode.right){ //Is there a right child
            queue.push(currNode.right); 
        }
        return this.breadthFirstSearchRecursive(queue, list);
    }
    DFSInorder(){
        return traverseInOrder(this.root, []);
    }
    DFSPostorder(){
        return traversePostOrder(this.root, [])
    }
    DFSPreOrder(){
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node, list){
    if (node.left){
        traverseInOrder(node.left, list); 
    }
    list.push(node.value);
    if(node.right){
        traverseInOrder(node.right, list);
    } 
    return list;
}

function traversePreOrder(node, list){
    list.push(node.value);
    if (node.left){
        traversePreOrder(node.left, list); 
    }
    if(node.right){
        traversePreOrder(node.right, list);
    } 
    return list;
}

function traversePostOrder(node, list){ 
    if(node.left){
        traversePostOrder(node.left, list); 
    }
    if(node.right){
        traversePostOrder(node.right, list); 
    }
    list.push(node.value);
    return list; 
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
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchRecursive([tree.root], []));
console.log(tree.DFSInorder(tree.root, []));
console.log(tree.DFSPreOrder(tree.root, []));
console.log(tree.DFSPostorder(tree.root, []));

function traverse(node){
    const tree = { value : node.value }; 
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree; 
}