import Memory from './memory'

class Array {
    //Initializing and pushing 
    constructor() {
        this.length = 0;
        this.ptr = Memory.allocate(this.length)
    }
    push(value) {
        this._resize(this.length + 1)
        Memory.set(this.ptr + this.length, value)
        this.length++;
    }
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = Memory.allocate(size);
        if( this.ptr === null ){ 
            throw new Error('Out of memory')
        }
        Memory.copy(this.ptr, oldPtr, this.length);
        Memory.free(oldPtr);
    }
    //Retrieving values 
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return Memory.get(this.ptr + index);
    }

    //Popping values
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = Memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    //inserting values 
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        Memory.set(this.ptr + index, value);
        this.length++;
    }
    //Removing values 
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

}

Array.SIZE_RATIO = 3;

