/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let nodes = inOrderDFS(root, []);
    return isSorted(nodes);
};

function isSorted(arr){
    for(let i=0; i < arr.length - 1; i++){
        if (arr[i + 1] <= arr[i]){
            return false; 
        }
    }
    return true; 
}

function inOrderDFS(node, list){
    return traverseInOrder(node, list);
}; 

function traverseInOrder(node, list){
    if(node.left){
        traverseInOrder(node.left, list); 
    }
    list.push(node.val); 
    if(node.right){
        traverseInOrder(node.right, list);
    }
    return list; 
}