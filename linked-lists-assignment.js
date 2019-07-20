class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)

    }
    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        let currNode = this.head;
        
        if(!this.head) {
            return null;
        }
        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if(!this.head) {
            return null;
        }

        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let previousNode= this.head;

        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(item, ptr) {
        //work on implementing this code
    }
    insertAfter(item, ptr) {
        //work on implementing this code
    }
    isEmpty() {
        return this.head === null;
    }

    display() {
        let output = '[';
        let current = this.head
        while(current !== null) {
            output += current.value;
            if(current.next !== null) {
                output += ',';
            }
            current = current.next
        }
        output += ']';
        return output;
    }
    size() {
        let current = this.head;
        let count = 0;
        while (curent !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
    findPrevious() {
        //code
    }
    findLast() {
        //code
    }

}

//Mystery program 
function WhatDoesThisProgramDo(lst) {
    //determines if the node after the current node is equal in value to the node after it? I believe this would be O(n)
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

function thirdFromEnd() {
    // I'm thinking we need to set up a less than to the value of 3 indexes before the end of the linked list? 
}

function middleOfAList() {
    //I would set up a count, and then cut that in half and print the value? or are we wanting to print the value of the index that is halfway?
    
}

function main() {
//look into how to actually just insert so that the lsit is complete. 
    let SLL = new LinkedList();

    SLL.insertLast('Apollo')
    SLL.insertLast('Helo')
    SLL.insertFirst('Husker')
    SLL.insertFirst('Starbuck')
    SLL.insertLast('Boomer')
    SLL.insertLast('Tauhida')
    SLL.remove('Helo')

    console.log(SLL)
    console.log(SSL.display())
}

//Last assignments how to ?
main()