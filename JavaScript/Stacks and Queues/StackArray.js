//Implementation of a Stack using an Array

class Stack {
    constructor(){
        this.array = []; 
    }
    peek(){
        return this.array.length === 0 ? "No elements in the stack" : this.array[this.array.length - 1]; 
    }
    push(value){
        this.array.push(value); 
        return this.array; 
    }
    pop(){
        if(this.array.length){
            this.array.pop(); 
            return this.array;
        } 
        else {
            return "Can't pop since there are no stack elements present";
        }
    }
}

const myStack = new Stack(); 
myStack.push(5);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.push(75));
console.log(myStack.push(35));
console.log(myStack.peek());