class Solution {
    public int search(int[] nums, int target) {
        return binarySearch(nums, target, 0, nums.length - 1);
    }

    public int binarySearch(int [] nums, int target, int start, int end){
        int middle = (start + end)/2; 
        
        if(start > end){
            return -1; 
        }
    
        if (nums[middle] == target){
            return middle; 
        } else if (nums[middle] < target){
            return binarySearch(nums, target, middle + 1, end); 
        } else {
            return binarySearch(nums, target, start, middle - 1);
        } 
    }
}