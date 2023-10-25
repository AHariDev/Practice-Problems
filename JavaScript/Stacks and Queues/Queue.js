//Implementing a Queue using Linked Lists

class Node{
    constructor(value){
        this.value = value;
        this.next = null;  
    }
}

class Queue{
    constructor(){
        this.first = null; 
        this.last = null; 
        this.length = 0; 
    }
    peek(){
        return this.length ? this.first : "No items in the queue";  
    }
    dequeue(){
        if(!this.first){
            return "Can't dequeue on empty stack"; 
        }
        if(this.first === this.last){
            this.last = null; 
        }
        this.first = this.first.next; 
        this.length--;
        return this; 
    }
    enqueue(value){
        const newNode = new Node(value); 
        if(this.length === 0){
            this.first = newNode; 
            this.last = newNode; 
        } else {
            this.last.next = newNode; 
            this.last = newNode; 
        }
        this.length++; 
        return this; 
    }
}

const myQueue = new Queue; 
console.log(myQueue.enqueue("Mark"));
console.log(myQueue.enqueue("Joey"));
console.log(myQueue.peek());
console.log(myQueue.enqueue("Ross"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());