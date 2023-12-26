package Java.Strings;

public class Palindrome {
    class Solution {
        public boolean isPalindrome(String s) {
            s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase(); //Remove non-alphanumeric characters
            int i = 0; //Left Pointer
            int j = s.length() - 1; //Right Pointer
            while (i <= j){
                if(s.charAt(i) != s.charAt(j)){
                    return false; 
                }
                i++; 
                j--; 
            }
            return true; 
        }
    }
}
