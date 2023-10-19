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
            this.length--;
            if(index === 0){
                this.head = this.head.next; 
            } else {
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
    reverse(){
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
          }
          this.head.next = null;
          this.head = first;
          return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(5);
myLinkedList.append(5);
myLinkedList.remove(0);
myLinkedList.insert(1, 2);
myLinkedList.insert(0, 2);
myLinkedList.insert(0, 2);
myLinkedList.reverse();
console.log(myLinkedList.printList());