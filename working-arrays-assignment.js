const memory = require('./memory')

// //1. Implement an Array class from scratch.
// class Array {
//     //initialize the class
//     constructor() {
//         this.length = 0;
//         this._capacity = 0;
//         this.ptr = memory.allocate(this.length)
//     }
//     //push values into your array
//     push(value) {
//         //increment array length 1 each time we push an item 
//         this._resize(this.length + 1)
//         //add this new POINTER value to the length of the array
//         memory.set(this.ptr + this.length, value)
//         //increment each time necessary to complete the push
//         this.length++
//     }
//     //allow for the array size to expand with additional items
//     _resize(size) {
//         //retrieve the value of the original array
//         const oldPtr = this.ptr;
//         //use the allocate method to add storage to the memory to allow for whatever size param we are adding  
//         this.ptr= memory.allocate(size);
//         //if the pointer is empty, throw an error that we cannot add another
//         if(this.ptr === null ){
//             throw new Error('Out of memory')
//         }
//         //copy the array value and merge the new pointer with the old array value and access the array length 
//         memory.copy(this.ptr, oldPtr, this.length);
//         //unload the old memory used for the previous array 
//         memory.free(oldPtr);
//     }
//     //get values from the now built array
//     get(index) {
//         // if the index value is less than 0 OR greater than or equal to the array length, throw error as no data is accesible. 
//         if(index < 0 || index >= this.length) {
//             throw new Error('Index error');
//         }
//         // retrieve the pointer from the memory at the particular index 
//         return memory.get(this.ptr + index);
//     }

//     //Removes the last value in an array to leave room for the next value to be pushed into place
//     pop() {
//         // if the index value is less than 0 OR greater than or equal to the array length, throw error as no data is accesible. 
//         if(this.length == 0) {
//             throw new Error('Index error');
//         }
//         // retrieve the value from memory of the last item in the array 
//         const value = memory.get(this.ptr + this.length - 1);
//         // remove 1 from the array length
//         this.length--;
//         //return the value of the removed array item 
//         return value;
//     }
    
//     //Allows you to insert a value into an array not just in the end or the middle. 
//     insert(index, value) {
//         // if the index value is less than 0 OR greater than or equal to the array length, throw error as no data is accesible. 
//         if(index < 0 || index >= this.length) {
//             throw new Error('Index error');
//         }
//         //if the length of the arraty exceeds the capacity then add 1 for every new value and multiply the value of the array 
//         if(this.length >= this._capacity) {
//             //*confirm we are accessing the new size of the array
//             this._resize((this.length + 1) * Array.SIZE_RATIO);
//         }
//         // copy the entire array, access the index where you plan to insert a new value
//         memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
//         //insert the value you are interested into the new array 
//         memory.set(this.ptr + index, value);
//         //insert item into the array
//         this.length++;
//     }
//     remove(index) {
//         // if the index value is less than 0 OR greater than or equal to the array length, throw error as no data is accesible.         
//         if(index < 0 || index >= this.length) {
//             throw new Error('Index error');
//         }
//         //copy the entire array and access the index where you plan to insert a new value, abd then remove it. 
//         memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
//         //remove item from array
//         this.length--;
//     }
// }

//2. Explore the push() method 3. Exploring the pop() method
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    //the length of the array is 
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop(); 
    // Empty the array and add just 1 item: arr.push("tauhida");
    arr.push('tauhida');
    //3.Understanding more about how arrays work
    // Print the 1st item in the array arr.
    console.log(arr[0]);
    console.log(arr)

}
main();

//Url Stringify 
function urlStringify(string) {
    let newString = ''
    for(let i = 0; i < string.length; i++) {
        if(string[i] === ' ') {
            newString += '%20'
        } else {
            newString += string[i]
        }
    }
    return newString
}
console.log(urlStringify('Sara Mayberry'))
console.log(urlStringify('www.thinkful.com/ sara mayberry webiste'))

//6. Filtering an array
function filterArray(arr) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 5) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

console.log(filterArray([ 5, 1, 20, 2, 10 ]))

//7. Max sum in the array
//I'm only getting 0 as a result
let some_array = [4, 6, -3, 5, -2, 4]
function maxSum(arr) {
    let currentTotal = 0

    let maxTotal = 0
    
    for(let i = 0; i < arr.length; i++) {
        let currentIdx = arr[i]
        
        currentIdx = Math.max((currentIdx + currentTotal), 0)

        maxTotal = Math.max(currentTotal, maxTotal)
    }
    return maxTotal
}
console.log(maxSum(some_array))

//8. Sort and merge arrays
let arr1 = [1,3,9,10]
let arr2 = [6,7,2,4,0]
//long version 
function mergeArrays(arr1, arr2) { 
    for(let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }
    for(let j = 0; j < arr1.length; j++) {
        for (let k = j + 1; k < arr1.length; k++) {
            if (arr1[j] > arr1[k]) {
                let temp = arr1[j];
                arr1[j] = arr1[k];
                arr1[k] = temp
            }
        }
    }
    return arr1
}
console.log(mergeArrays(arr1,arr2))

//using concat and sort
function combineSort(arr1, arr2) {
    let newArr = arr1.concat( arr2 )
    newArr.sort( ( a, b) => {
        return a - b
    })
    return newArr
}
console.log( combineSort( [ 1, 3, 6, 8, 11 ], [ 2, 3, 5, 8, 9, 10 ] ) )



