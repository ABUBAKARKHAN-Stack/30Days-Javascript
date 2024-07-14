// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var numOne = 100; // Declare a variable 'numOne' using var and assign it the value 100.
console.log(numOne); // Output the value of 'numOne' to the console. // 1

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let numTwo = '200'; // Declare a variable 'numTwo' using let and assign it the string '200'.
console.log(numTwo); // Output the value of 'numTwo' to the console. // 2

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const isLoggedIn = true; // Declare a constant 'isLoggedIn' and assign it the boolean value true.
console.log(isLoggedIn); // Output the value of 'isLoggedIn' to the console. // 3

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let myNum = 999; // Declare a variable 'myNum' and assign it the number 999.
let userName = 'Abubakar'; // Declare a variable 'userName' and assign it the string 'Abubakar'.
let isActive = false; // Declare a variable 'isActive' and assign it the boolean value false.
let superHeros = ['Superman', 'Spiderman', 'Batman']; // Declare a variable 'superHeros' and assign it an array of strings.
let userOne = { name: 'Okasha', age: 17 }; // Declare a variable 'userOne' and assign it an object with properties name and age.

// Log the types of the declared variables to the console.
console.log(typeof myNum); // Output: 'number' // 4
console.log(typeof userName); // Output: 'string' // 4
console.log(typeof isActive); // Output: 'boolean' // 4
console.log(typeof superHeros); // Output: 'object' (arrays are objects in JavaScript) // 4
console.log(typeof userOne); // Output: 'object' // 4

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let greet = function (greeting) { // Declare a function 'greet' using let.
    console.log(greeting); // Log the provided greeting to the console.
};
greet('Welcome User'); // Call the greet function with the argument 'Welcome User'. // 5

let courses = { name: 'JS', price: 9000 }; // Declare an object 'courses' with properties name and price.
courses.name = 'C++'; // Reassign the 'name' property of the 'courses' object.
console.log(courses.name); // Output: 'C++' // 5
console.log(courses); // Output: { name: 'C++', price: 9000 } // 5

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const age = 19; // Declare a constant 'age' and assign it the value 19.
age = 20; // Attempt to reassign 'age' to 20 will cause an error.
console.log(age); // This will not be executed due to the error above. // 6
