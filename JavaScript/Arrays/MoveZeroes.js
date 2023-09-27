/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j=0; //slow pointer
    for (let i=0; i<nums.length; ++i){ //i is the fast pointer 
        if (nums[i] === 0){
            ++j; 
        } else {
            [nums[i-j], nums[i]] = [nums[i], nums[i-j]]; //Swap the values using destructuring syntax
        }
    }
};