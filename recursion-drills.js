// Counting Sheep drill 1 
// ? I'm not sure what they are asking of in this 
const sheepCount = function(sheep) {
    //base case
    if (sheep === 0) {
        return 0;
    }
    else {
        return sheepCount(sheep + n)
    }
    //General case 
    return sheep[0] + sheepCount(sheep.slice(1))
}


//2. Power Calculator 

function powerCalculator(int1, int2) {
    return Math.pow(int1, int2)
}


//3. Reverse string 
function reverseString(str) {
    // use split to return a new array
    let splitString = str.split('');

    //use reverse method to reverse the new created array
    let reverseArray = splitString.reverse();

    //use join method to join the elements into a string
    let joinArray = reverseArray.join('')

    //return the reverse string
    return joinArray;
}

//4. nth Triangular Number .... not a clue how to solve this.


//5. String splitter 
