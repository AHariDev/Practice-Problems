// 10->5->16

class Node {
    constructor(value){
        this.value = value; 
        this.next = null; 
    }
}

class LinkedList {
    constructor (value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
       const newNode = new Node(value);
       this.tail.next = newNode;
       this.tail = this.tail.next; //Sets the tail to be the new Node
       this.length++;
       return this; //Returns the linked list
    }
    prepend(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++; 
    }
    printList(){
        const array = []; 
        let currNode = this.head; 
        while(currNode){
            array.push(currNode.value); 
            currNode = currNode.next; 
        }
        return array; 
    }
    insert(index, value){ //Uses 0-based indexing
        let currNode = this.head;
        let insertNode = new Node(value);
        let position = 0; 
        if (index >= 0 && index <= this.length - 1){
            if (index === 0){
                this.prepend(value);
                this.length++;
            } else if (index === this.length){
                this.append(value);
            } else {
                this.length++;
                while(currNode){
                    if (position === index-1){
                        let tempNode = currNode.next;
                        currNode.next = insertNode;
                        insertNode.next = tempNode;
                        break;
                    }
                    position++; 
                    currNode = currNode.next;
                }
            }
        }
    }
    // Note: Delete won't work because of garbage collection
    remove(index){ //Uses 0-based indexing
        let nodeToDelete; 
        let currNode = this.head; 
        let position = 0; 
        if (index >= 0 && index <= this.length - 1){
            if(index === 0){
                this.head = this.head.next; 
                this.length--; 
            } else {
                this.length--; 
                while (currNode){
                    if (position === index - 1){
                        currNode.next = currNode.next.next;
                        break;  
                    }
                    position++; 
                    currNode = currNode.next; 
                }
            }
        }
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.insert(1, 4);
myLinkedList.insert(1, 4);
myLinkedList.remove(2);
myLinkedList.remove(1);
myLinkedList.append(5);
myLinkedList.insert(1, 4);
myLinkedList.remove(2);
myLinkedList.insert(1, 4);
myLinkedList.insert(1, 4);
console.log(myLinkedList.printList());
console.log(myLinkedList.length);