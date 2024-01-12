package Java.Stacks;

import java.util.Stack;

class ValidParentheses {
    public boolean isValid(String s) {
        if(s.length() == 0 || s.length() % 2 != 0){
            return false; 
        }
        Stack<Character> stack = new Stack<Character>();
        int numPairs = 0;  
        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == '(' || s.charAt(i) == '{' || s.charAt(i) == '['){
                stack.push(s.charAt(i)); 
            } else {
                if (stack.isEmpty()){
                    return false;
                }
                if (s.charAt(i) == ')'){
                    if (stack.pop() == '('){
                        numPairs++; 
                    }
                } else if (s.charAt(i) == '}'){
                    if(stack.pop() == '{'){
                        numPairs++; 
                    }
                } else if (s.charAt(i) == ']'){
                    if(stack.pop() == '['){
                        numPairs++; 
                    }
                }
            }
        }; 
        return (numPairs == s.length()/2); 
    }
}