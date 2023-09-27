/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Solution using the two-pointer approach
let moveZeroes = function (nums) {
    let low = 0; //Left pointer
    let high = low + 1; //Right pointer

    while (high <= nums.length - 1) {
        if (nums[low] !== 0) {
            low++;
            high++;
        } else {
            if (nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]]; //Swap the two values
                low++;
            }
            high++;
        }
    }
};