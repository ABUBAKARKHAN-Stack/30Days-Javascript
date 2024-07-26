// Activity 1: Creating and Exporting Modules

// Task 1: Export a function to add two numbers.
export const addNums = (a, b) => {
    // Return the sum of two numbers
    return a + b;
}

// Task 2: Export an object representing a person with properties.
export const person = {
    // Object properties
    name: 'abubakar',
    age: 17
}

// Activity 2: Named and Default Exports

// Task 3: Export multiple functions using named exports.
function welcomeNote() {
    // Log a welcome message
    console.log('Welcome to my Website');
}

function greet() {
    // Log a greeting message
    console.log('How are You ?');
}

export {
    welcomeNote,
    greet
}

// Task 4: Export a single function using default export.
export default function subtract(a, b) {
    // Return the result of subtracting b from a
    return a - b;
}

// Importing the modules

// Import default and named exports from the module
import subtract from "./module.js";
import { addNums, person, welcomeNote, greet } from "./module.js";

// Activity 3: Importing Entire Modules

// Import the entire module as an object, including the default export
import subtract, * as file from './module.js'

// Task 1: Use the addNums function to add two numbers and log the result
const result = addNums(2, 3);
console.log(result);

// Task 2: Log the person object
console.log(person);

// Task 3: Log the output of welcomeNote and greet functions
console.log(welcomeNote());
console.log(greet());

// Task 4: Use the subtract function to subtract two numbers and log the result
console.log(subtract(4, 2));

// Task 5: Use the entire module object to access its exports
console.log(file.addNums(2, 3));
console.log(file.person);
console.log(file.welcomeNote());
console.log(file.greet());

// Activity 4: Using Third-Party Modules

// Task 6: Import the entire lodash library
import _ from 'lodash'

// Define a simple function to add two numbers and log the result
function plus(a, b) {
    return a + b;
}
console.log(plus(3, 4));

// Task 7: Import the axios library to make network requests
import axios from "axios";

// Define an asynchronous function to fetch data from an API
async function fetchData() {
    try {
        // Make a GET request to a sample API endpoint
        let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response.data); // Log the response data
    } catch (error) {
        // Log an error message if the request fails
        console.log('ERROR');
    }
}

// Call the fetchData function
fetchData()
