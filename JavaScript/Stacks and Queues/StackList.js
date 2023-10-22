//Implementation of Stack Data Structure using Linked Lists
class Node {
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class Stack {
    constructor(){ //Initialize an Empty Stack
        this.top = null; 
        this.bottom = null; 
        this.length = 0;
    }
    peek(){ //Method to view the top stack element
        return this.top; 
    }
    push(value){ //Pushes a new element to the stack 
        const pushNode = new Node(value);
        if(!this.length){
            this.top = pushNode;
            this.bottom = pushNode; 
        } else {
            const temp = this.top; 
            this.top = pushNode; 
            this.top.next = temp;
        }
        this.length++;
    }
    pop(){ //Removes top element from stack 
        if(!top){
            return null; 
        } else if (this.top === this.bottom){
            this.bottom = null; 
        }
        this.top = this.top.next; 
        this.length--; 
    }
}

const myStack = new Stack(); 
myStack.push(5);
myStack.push(7);
console.log(myStack.peek());
console.log(myStack.bottom);