class _Node {
    constructor(value) {
        this.value=value,
        this.next=null
    }
}

class starTrek {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if(this.first === null) {
            this.first = node;
        }

        if(this.last) {
            this.last.next = node;
        }

        this.last = node;
        console.log(data)
    }

    dequeue() {
        if(this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;

        if(node === this.last) {
            this.last = null;
        }
        return node.value
    }
    peek() {
        //implement peak
    }

    display() {
        //to display the stack, what is the first item in the stack
    }

    isEmpty() {
        //to check if the stack is empty or not
    }
}

function main() {
    let queue = new starTrek();

    // queue.enqueue('Kirk')
    // queue.enqueue('Spock')
    // queue.enqueue('McCoy')
    // queue.enqueue('Scotty') 
    queue.isEmpty() 
    console.log(queue)
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
}

function sortStack() {
    //Write  a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
console.log(main())