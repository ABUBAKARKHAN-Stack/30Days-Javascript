// Activity 1 Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenodd(num) {
    return num % 2 === 0 ? "Even" : "Odd"; // Check if the number is even or odd
}
console.log(evenodd(3)); // Output: "Odd"

// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
    return num * num; // Calculate the square of the number
}
console.log(square(64)); // Output: 4096

// Activity 2 Function Expression 

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxNum = function(numOne, numTwo) {
    if (numOne > numTwo) {
        return numOne; // Return the first number if it is greater
    } else {
        return numTwo; // Otherwise, return the second number
    }
};
console.log(maxNum(9, 3)); // Output: 9

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenation = function(strOne, strTwo) {
    return strOne + strTwo; // Concatenate the two strings
};
console.log(concatenation('Hello', ' World')); // Output: "Hello World"

// Activity 3 Arrow Function

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumOfTwo = (numOne, numTwo) => {
    return numOne + numTwo; // Calculate the sum of the two numbers
};
console.log(sumOfTwo(5, 5)); // Output: 10

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checking = (string) => {
    if (string.includes('a')) {
        return true; // Return true if the string contains 'a'
    } else {
        return false; // Otherwise, return false
    }
};
console.log(checking('alex')); // Output: true
console.log(checking('fight')); // Output: false

// Activity 4 Function Params and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(numOne, numTwo = 5) {
    return numOne * numTwo; // Multiply the two numbers
}
console.log(product(25)); // Output: 125

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(userName, age = 17) {
    return `Hey ${userName}. Your age is ${age}. Welcome To Our Website`; // Return a greeting message
}
console.log(greet('Abubakar')); // Output: "Hey Abubakar. Your age is 17. Welcome To Our Website"

// Activity 5 Higher-Order Function

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function myFunc(func, num) {
    for (let index = 0; index < num; index++) {
        func(index); // Call the function with the current index
    }
}
function callNum(index) {
    console.log(`${index + 1}`); // Log the current index plus one
}
myFunc(callNum, 10); // Outputs numbers 1 to 10

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function hard(funcOne, funcTwo, value) {
    return funcTwo(funcOne(value)); // Apply the first function to the value and then the second function to the result
}
function first(value) {
    return value * 2; // Multiply the value by 2
}
function sec(value) {
    console.log(value); // Log the value
}
hard(first, sec, 10); // Output: 20


