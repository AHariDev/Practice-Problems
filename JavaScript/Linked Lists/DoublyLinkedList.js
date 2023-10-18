// 10->5->16

class Node {
    constructor(value){
        this.value = value; 
        this.next = null; 
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor (value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
       const newNode = new Node(value);
       newNode.prev = this.tail; 
       this.tail.next = newNode; 
       this.tail = newNode; 
       this.length++; 
    }
    prepend(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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
            } else if (index === this.length){
                this.append(value);
            } else {
                this.length++;
                while(currNode){
                    if (position === index-1){
                        let tempNode = currNode.next;
                        currNode.next = insertNode;
                        insertNode.prev = currNode; 
                        insertNode.next = tempNode;
                        tempNode.prev = insertNode;
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
                this.head.prev = null;
                this.length--; 
            } else {
                this.length--; 
                while (currNode){
                    if (position === index - 1){
                        currNode.next = currNode.next.next;
                        currNode.next.prev = currNode;
                        break;  
                    }
                    position++; 
                    currNode = currNode.next; 
                }
            }
        }
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(2, 7);
myLinkedList.remove(0);
console.log(myLinkedList);
console.log(myLinkedList.printList());
console.log(myLinkedList.length);