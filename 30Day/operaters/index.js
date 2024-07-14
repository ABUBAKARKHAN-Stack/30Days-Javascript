// Arithmetic Operators Task 1
const addTwoNum = 5 + 7; // Adds 5 and 7
console.log(addTwoNum); // Logs: 12

const subTwoNum = 9 - 7; // Subtracts 7 from 9
console.log(subTwoNum); // Logs: 2

const multiplyTwoNum = 9 * 7; // Multiplies 9 and 7
console.log(multiplyTwoNum); // Logs: 63

const divideTwoNum = 9 / 3; // Divides 9 by 3
console.log(divideTwoNum); // Logs: 3

const modulusTwoNum = 9 % 4; // Finds the remainder of 9 divided by 4
console.log(modulusTwoNum); // Logs: 1

// Assignment Operators Task 2

let addTwoNumnumberAssign = 100; // Initializes the variable with 100
console.log(addTwoNumnumberAssign += 1); // Adds 1 to the variable and logs: 101


let subTwoNumnumberAssign = 100; // Initializes the variable with 100
console.log(subTwoNumnumberAssign -= 1); // Subtracts 1 from the variable and logs: 99

// Comparison Operators Activity 3

console.log(10 > 11); // Logs: false (10 is not greater than 11)
console.log(10 < 11); // Logs: true (10 is less than 11)
console.log(10 >= 10); // Logs: true (10 is greater than or equal to 10)
console.log(10 <= 11); // Logs: true (10 is less than or equal to 11)
console.log(10 == "10"); // Logs: true (loose equality, 10 is equal to "10")
console.log(10 === '10'); // Logs: false (strict equality, 10 is not equal to '10')

// Logical Operators Activity 4

const numOne = 100;
const numTwo = '100';
console.log(numOne == numTwo && numOne === numTwo); // Logs: false (both conditions are not true)
console.log(numOne == numTwo || numOne === numTwo); // Logs: true (one of the conditions is true)
console.log(!numOne === numTwo); // Logs: false (negation does not make the statement true)
console.log(numOne == numTwo != numOne === numTwo); // Logs: true (evaluates to true != false)

// Ternary Operator Activity 5

const number = -11;
console.log(number < 0 ? "Negative" : "Positive"); // Logs: "Negative" (number is less than 0)
