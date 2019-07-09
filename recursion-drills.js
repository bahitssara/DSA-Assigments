//1. Counting Sheep drill 
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
/*Reverse String: Take a string as input, reverse the string, and return the new string. */

let reverse = (string, string2) => {
    string2 = !string2 ? '' : string2;
  
    if (string.length == 0) return string2;
  
    string2 = string2 + string[string.length - 1];
  
    string = string.substring(0, string.length - 1);
  
    return reverse(string, string2);
  }
  
  console.log(reverse('t'));

  
  // alternate solution
  
  let reverse = (str, str2) => {
      if (!str2) {
          str = str.split('');
          str2 = [];
      }
  
      if (str.length === 0) return str2.join('');
  
      str2.unshift(str[0]);
      str.shift();
  
      return reverse(str, str2);
  }
  
  console.log(reverse('string'));

//4. nth Triangular Number .... not a clue how to solve this.
/* Exercise 4: Calculates the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
*/

let nthTriNum = (n, t) => {
    t = !t ? 0 : t;

    if (n === 0) {
        return 'T = ' + t;
    }

    t = t + n;
    n = n - 1;

    return nthTriNum(n, t);
}

console.log(nthTriNum(6));

//5. String splitter 
/* Exercise 5:
Write a recursive function that split a string based on a separator (similar to String.prototype.split).
*/

let separator = (str, sep, arr, str2) => {
  arr = arr || [];
  str2 = str2 || '';

  // when no separator is passed
  if (!sep && sep !== '') return arr;

  // when no string is passed
  if (!str && !str2) return arr;

  // when str is finished but str2 still has a string in it
  if (!str && str2) {
    arr.push(str2);
    return arr;
  }

  // adds next char to str2 when its not equal to sep
  if (str.substring(0, sep.length) !== sep) {
    str2 = str2.concat(str[0]);
  }
  // when it matches sep or when sep is an empty string
  if (str.substring(1, sep.length + 1) === sep || sep === '') {
    arr.push(str2);
    str2 = '';
  }

  // chooses next str to pass to recursion
  // if str matches sep it will choose substring beyond the sep
  if (str.substring(0, sep.length) === sep) {
    str = str.substring (sep.length, str.length);
  } else { // else it will do the next char to the end of string
    str = str.substring(1, str.length);
  }
  // calls recursively
  return separator(str, sep, arr, str2);
}

//6. Fibonacci
/* Exercise 6: Calculates the nth triangular number.
Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/

function fibonacci_series(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        let s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci_series(8));

//7. Factorial 
// a recursion is a function calling itself
/*
Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/
function factorial(n) {

    // terminate the recursion once we hit zero
    if (n === 0) {
        console.log('the recursion has reached ' + 0);
        return 1;
    }

    // otherwise keep calling the function recursively
    else {
        console.log("inside the recursion n = " + n)
        // the function calls itself
        return factorial(n - 1) * n;
    }
}

console.log(factorial(5));

//10. Anagrams 


console.log(separator('monkey is happy', ' '));