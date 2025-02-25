// String Manipulation Functions

// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Array Functions

// 4. Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// 5. Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// 6. Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions

// 7. Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 8. Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 9. Fibonacci Sequence
function fibonacciSequence(terms) {
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, terms);
}

// Example Usage

// String Manipulation
console.log(reverseString("hello")); // Output: "olleh"
console.log(countCharacters("hello")); // Output: 5
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Array Functions
const numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers)); // Output: 5
console.log(findMin(numbers)); // Output: 1
console.log(sumArray(numbers)); // Output: 15
console.log(filterArray(numbers, num => num % 2 === 0)); // Output: [2, 4]

// Mathematical Functions
console.log(factorial(5)); // Output: 120
console.log(isPrime(7)); // Output: true
console.log(fibonacciSequence(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]