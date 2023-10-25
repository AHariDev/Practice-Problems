/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head; 
    while(fast && fast.next){
        fast = fast.next.next; 
        head = head.next;
        if(fast === head){ //If the two nodes overlap, then the list is circular
            return true;
        }
    }
    return false; 
};