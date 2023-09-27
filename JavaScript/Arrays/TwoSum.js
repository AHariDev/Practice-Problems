/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(); 
    for (let i = 0; i < nums.length; i++){
        if (map.has(target - nums[i])){ 
            return [map.get(target - nums[i]), i]; //Return the two indices summing to target
        } else {
            map.set(nums[i], i); //Otherwise add the key-value pair to the hash map
        }
    }

    return false; //If there's no such pair
};