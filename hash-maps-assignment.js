class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    // Best AVG performance case for this function is o(1), o(n) worst case if you end up with a collision and need to iterate over all items
    set(key, value){
        //checks whether the load ratio is greater than the given maximum. 
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            //if the ratio is greater it resizes the hash map using resize()
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);
        //adds object to the array containing the key/value pair & increases length
        if(!this._hashTable[index]){
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }; 
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    // Best AVG performance case for this function is o(1), o(n) worst case if you end up with a collision and need to iterate over all items
    _findSlot(key) {
        //calculate the hash of the key
        const hash = HashMap._hashString(key);
        //find a slot for the key with the current capacity
        const start = hash % this._capacity;

        //loop over the array
        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            ////stop when it finds the slot with a matching key, or an empty slot... 
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    //This case is o(n) in the best/average case and o(n^2) in the worst case
    _resize(size) {
        const oldSlots = this._slots;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._slots = [];

        for (const slot of oldSlots) {
            if (slot !== undefined) {
                this.add(slot.key, slot.value);
            }
        }
    }

    

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //Bitwise left shift with 5 0s - this would be similar to
            //hash*31, 31 being the decent prime number
            //but bit shifting is a faster way to do this
            //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure has is unsigned - meaning non-negtive number. 
        return hash >>> 0;
    }
}

module.exports = HashMap;