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

    insert(item) {
        // let newNode = this.head
        this.next = new _Node(item, this.next)
        console.log('item', item)
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
        console.log('item', item)

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
        console.log('item', item)
    }

    insertBefore(item, ptr) {
        //work on implementing this code
    }
    insertAfter(item, ptr) {
        //work on implementing this code
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
}


function main() {
//look into how to actually just insert so that the lsit is complete. 
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo')
    SLL.insert('Helo')
    SLL.insert('Husker')
    SLL.insert('Starbuck')
    SLL.insertLast('Boomer')
    // SLL.insertLast('Tauhida')
    // SLL.remove('Helo')

    console.log(SLL)
}

//Last assignments how to ?


console.log(main())