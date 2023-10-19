/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var reverse = (str) => {
        let join = ""; 
        for (let i = str.length - 1; i >= 0; i--){
            join += str[i]; 
        }
        return join; 
    }
    let arr = []; 
    while(head){
        arr.push(head.val.toString());
        head = head.next; 
    }
    return (arr.join('') == reverse(arr.join('')));
};

//Solution using O(1) space instead of O(n): https://leetcode.com/problems/palindrome-linked-list/solutions/499038/intuitive-javascript-solution/