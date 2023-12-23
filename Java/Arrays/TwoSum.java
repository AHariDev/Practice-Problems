import java.util.Map;
import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            if(map.containsValue(target - nums[i])){
                return new int[] {map.get(target-nums[i]), i}; 
            } else {
                map.put(nums[i], i);
            }
        } 
        return new int[] {}; 
    }
}