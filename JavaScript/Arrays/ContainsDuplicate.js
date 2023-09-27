/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map(); 
    for (let i = 0; i < nums.length; ++i){
        if (map.has(nums[i])){ 
            return true; //If a specific value was already stored, it's a duplicate
        } else {
            map.set(nums[i], i); //If not a duplicate, add to the hash map to keep a record
        }
    }
    return false; 
};