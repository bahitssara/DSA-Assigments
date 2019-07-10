import memory from './memory'

class Array {
    //initialize the class
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length)
    }
    //push values into your array
    push(value) {
        //increment array length 1 each time we push an item 
        this._resize(this.length + 1)
        //add this new POINTER value to the length of the array
        memory.set(this.ptr + this.length, value)
        //increment each time necessary to complete the push
        this.length++
    }
    //allow for the array size to expand with additional items
    _resize(size) {
        //retrieve the value of the original array
        const oldPtr = this.ptr;
        //use the allocate method to add storage to the memory to allow for whatever size param we are adding  
        this.ptr= memory.allocate(size);
        //if the pointer is empty, throw an error that we cannot add another
        if(this.ptr === null ){
            throw new Error('Out of memory')
        }
        //copy the array value and merge the new pointer with the old array value and access the array length 
        memory.copy(this.ptr, oldPtr, this.length);
        //unload the old memory used for the previous array 
        memory.free(oldPtr);
    }
    //get values from the now built array
    get(index) {
        // if the index value is less than 0 OR greater than or equal to the array length, throw error as no data is accesible. 
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        // retrieve the pointer from the memory at the particular index 
        return memory.get(this.ptr + index);
    }

    //Removes the last value in an array to leave room for the next value to be pushed into place
    pop() {
        // if the index value is less than 0 OR greater than or equal to the array length, throw error as no data is accesible. 
        if(this.length == 0) {
            throw new Error('Index error');
        }
        // retrieve the value from memory of the last item in the array 
        const value = memory.get(this.ptr + this.length - 1);
        // remove 1 from the array length
        this.length--;
        //return the value of the removed array item 
        return value;
    }
    
    //Allows you to insert a value into an array not just in the end or the middle. 
    insert(index, value) {
        // if the index value is less than 0 OR greater than or equal to the array length, throw error as no data is accesible. 
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        //if the length of the arraty exceeds the capacity then add 1 for every new value and multiply the value of the array 
        if(this.length >= this._capacity) {
            //*confirm we are accessing the new size of the array
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        // copy the entire array, access the index where you plan to insert a new value
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        //insert the value you are interested into the new array 
        memory.set(this.ptr + index, value);
        //insert item into the array
        this.length++;
    }
    remove(index) {
        // if the index value is less than 0 OR greater than or equal to the array length, throw error as no data is accesible.         
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        //copy the entire array and access the index where you plan to insert a new value, abd then remove it. 
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        //remove item from array
        this.length--;
    }
}

Array.SIZE_RATIO = 6;