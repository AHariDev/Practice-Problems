import java.util.Stack;

public class QueueWithStacks {
    class MyQueue {

        private Stack<Integer> stack1 = new Stack<>(); //Input Stack
        private Stack<Integer> stack2 = new Stack<>(); //Output Stack
        
        public void push(int x) {
            stack1.push(x); 
        }
        
        public int pop() {
            if (stack2.empty()) {
                while (!stack1.empty()) {
                    stack2.push(stack1.pop());
                }
            }
            return stack2.pop(); 
        }
        
        public int peek() {
            if (stack2.empty()) {
                while (!stack1.empty()) {
                    stack2.push(stack1.pop());
                }
            }
            return stack2.peek();
        }
        
        public boolean empty() {
            return stack1.empty() && stack2.empty();
        }
    }
    
    /**
     * Your MyQueue object will be instantiated and called as such:
     * MyQueue obj = new MyQueue();
     * obj.push(x);
     * int param_2 = obj.pop();
     * int param_3 = obj.peek();
     * boolean param_4 = obj.empty();
     */
}
