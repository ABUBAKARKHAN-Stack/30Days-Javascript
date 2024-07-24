// Activity 1: Basic Error Handling With TRY/Catch

// Task 1: Function to demonstrate basic try-catch error handling
function tryCatch() {
    try {
        // Intentionally throw an error with a custom message
        throw new Error('Error 404')
    } catch (error) {
        // Log the error message to the console
        console.log(error.message);
    }
}

// Call the function to demonstrate error handling
tryCatch()

// Task 2: Function to demonstrate handling division and division by zero
function divisionByTwo(numberOne, numberTwo) {
    try {
        // Check if the division can be performed without errors
        if (numberOne / numberTwo) {
            // Log the result if the division is valid
            throw console.log(`Division is ${numberOne / numberTwo}`);
        }
    } catch (err) {
        // Catch division by zero and throw an error
        if (numberTwo === 0) {
            throw new Error('Division With Zero is Not allowed')
        }
    }
}

// Call the function to test division
divisionByTwo(3, 2)

// Activity 2: Finally Block

// Task 3: Demonstrating the use of finally block
let num1 = -2
let num2 = 20

try {
    // Check if num1 is greater than or equal to num2
    if (num1 >= num2) {
        console.log('True Statement');
    } else {
        // Throw an error if the condition is false
        throw new Error('False Statement num2 is Greater Than num1')
    }
} catch (error) {
    // Log the error message
    console.log(error.message);
} finally {
    // The finally block executes regardless of the try/catch outcome
    console.log('SomeThing is Execute');
}

// Activity 3: Custom Error Objects

// Task 4: Demonstrating the use of a custom error class

// Define a custom error class by extending the built-in Error class
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent constructor with a custom message
        this.name = 'CustomError'; // Set the name property to identify as a CustomError
    }
}

// Try-catch block to handle custom errors
try {
    let num1 = 1;
    // Check if the number is even
    if (num1 % 2 === 0) {
        console.log('Even Num');
    } else {
        // Throw an instance of the custom error if the number is odd
        throw new CustomError('Failed To Fetch ERROR');
    }
} catch (err) {
    // Log the custom error message
    console.log(err.message);
}

// Task 5: Function to validate input data and throw custom error

function validation(name, age) {
    try {
        // Check if name is not empty and age is a number
        if (name !== '' && !isNaN(age)) {
            console.log('According To Your Data You Are eligible for this position');
        } else {
            // Throw an error for invalid data
            throw new CustomError('Invalid Data');
        }
    } catch (error) {
        // Log the error message
        console.log(error.message);
    }
}

// Validate various inputs
validation('abu', 12); // Valid input
validation('', 12); // Invalid input (empty name)
validation('abubakar', 'abc'); // Invalid input (age not a number)

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects
const myPromise = new Promise((resolve, reject) => {
    let user = true;
    // Resolve or reject based on a condition
    if (!user) {
        resolve('Resolved');
    } else {
        reject('Rejected :(');
    }
})
    .then((res) => {
        // Log the resolved message
        console.log(res);
    })
    .catch((err) => {
        // Log the rejected message
        console.log(err);
    });

// Task 7: Using try-catch with promises

// Create a promise to simulate a network request
const networkRequest = new Promise((resolve, reject) => {
    let err = true;
    // Resolve or reject based on a condition
    if (!err) {
        resolve({
            user: 'Abubakar',
            master: 'Js'
        });
    } else {
        reject('Error Failed to fetch');
    }
});

// Async function to handle the network request
async function request() {
    try {
        // Await the promise and log the data
        const data = await networkRequest;
        console.log(data);
    } catch (error) {
        // Catch and log errors from the promise
        console.log(error);
    }
}

// Call the async function to make the request
request();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Fetch data from an invalid URL and handle errors

fetch('https://dumyjson.com/users')
    .then((res) => {
        // Parse the response to JSON
        return res.json();
    })
    .then((data) => {
        // Log the fetched data
        console.log(data);
    })
    .catch(() => {
        // Log an error message for invalid URL
        console.log('Error Invalid URL');
    });

// Task 9: Using async-await to fetch data and handle errors

async function fetchUser() {
    try {
        // Await the fetch request and parse the response to JSON
        const response = await fetch('https://dummjson.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch and log errors from the fetch request
        console.log('Error');
    }
}

// Call the async function to fetch user data
fetchUser();
