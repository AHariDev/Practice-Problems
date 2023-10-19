/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let currNode = head; 
    let arr = []; 
    while(currNode){
        arr.push(currNode.val.toString());
        currNode = currNode.next; 
    }
    let binary = arr.join('');
    let decimal = parseInt(binary, 2);
    return decimal;
};