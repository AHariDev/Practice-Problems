/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var reverse = (start, end) => { //Helper function to reverse array entries between two indices
        let [i, j] = [start, end]; //Initialize the two pointers - start and end
        while (j > i){
            let temp = nums[i]; 
            nums[i] = nums[j]; 
            nums[j] = temp; 
            j--; 
            i++; 
        }
    }
    k %= nums.length; //This covers the case in which k is larger than the size of the nums array
    reverse(0, nums.length - 1); 
    reverse(0, k-1); 
    reverse(k, nums.length - 1); 
};