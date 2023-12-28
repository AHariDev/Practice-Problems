package Java.Strings;

import java.util.Arrays;

public class Anagram {
    class Solution {
        public boolean isAnagram(String s, String t) {
            if(s.length() != t.length()){
                return false; 
            }
            String [] splitS = s.split("");
            String [] splitT = t.split("");
            Arrays.sort(splitS); 
            Arrays.sort(splitT); 
            return compare(splitS, splitT);
        }

        public boolean compare(String [] a, String [] b){
            for (int i = 0; i < a.length; i++){
                if(a[i].equals(b[i]) == false){
                    return false; 
                }
            }
            return true; 
        }
    }
}
