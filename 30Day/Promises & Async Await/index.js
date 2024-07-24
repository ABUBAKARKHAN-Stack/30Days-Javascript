// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves after a 2-second timeout and log a message
const promiseOne = new Promise((resolve, reject) => {
    // Simulate asynchronous operation with setTimeout
    setTimeout(() => {
        resolve(); // Resolve the promise after 2 seconds
    }, 2000);
});

promiseOne.then(() => {
    console.log("Promise 1 Fulfilled :)"); // Log message when the promise is resolved
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true; // Simulate an error condition
        if (!error) {
            resolve(); // Resolve if no error
        } else {
            reject(); // Reject if there is an error
        }
    }, 2000);
});

promiseTwo.then(() => {
    console.log('Promise 2 Fulfilled :)'); // Log message when the promise is resolved
})
.catch(() => console.log("Promise Error: User Not Found")); // Handle rejection with a message

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server
new Promise((resolve, reject) => {
    let err = false; // Simulate an error condition
    if (!err) {
        resolve({
            user: 'Abubakar', // Sample data to resolve
            address: 'City 21 Street 24 NY'
        });
    } else reject(console.log('error')); // Reject if there is an error
})
.then((res) => {
    console.log(res); // Log the resolved data
})
.catch((err) => {
    console.log(err); // Handle rejection
});

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value
const promiseFour = new Promise((resolve, reject) => {
    let err = false; // Simulate an error condition
    if (!err) {
        resolve({
            name: 'CodeWithAbubakar', // Sample data to resolve
            link: 'https://codewithabubakar.netlify.app'
        });
    } else reject(console.log('error')); // Reject if there is an error
});

async function consumedPromiseFour() {
    try {
        const response = await promiseFour; // Wait for the promise to resolve
        console.log(response); // Log the resolved value
    } catch (error) {
        console.log(error); // Handle any errors
    }
}

consumedPromiseFour();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message
const promiseFive = new Promise((resolve, reject) => {
    let err = true; // Simulate an error condition
    if (!err) {
        resolve({
            name: 'CodeWithAbubakar', // Sample data to resolve
            link: 'https://codewithabubakar.netlify.app'
        });
    } else reject(console.log('error')); // Reject if there is an error
});

async function consumedPromiseFive() {
    try {
        const response = await promiseFive; // Wait for the promise to resolve
        console.log(response); // Log the resolved value
    } catch (error) {
        console.log('Failed to Get Data'); // Handle the rejection and log a message
    }
}

consumedPromiseFive();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response using promises
fetch('https://v6.exchangerate-api.com/v6/d4f833a9727de430c29bc0c8/latest/USD')
.then((res) => {
    return res.json(); // Convert the response to JSON
})
.then((data) => {
    console.log(data);
})
.catch(() => console.log('Failed To Fetch Data')); // Handle any errors

// Task 7: Use the fetch API to get data from a public API and log the response using async/await
async function fetchCurrencyData() {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/d4f833a9727de430c29bc0c8/latest/USD');
        const data = await response.json(); // Convert the response to JSON
        console.log(data); // Log the data
    } catch (error) {
        console.log('Error While Fetching Data'); // Handle any errors
    }
}

fetchCurrencyData();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and log all their values
const p1 = new Promise((resolve, reject) => {
    resolve(4); // Resolve with a number
});

const p2 = new Promise((resolve, reject) => {
    resolve(['Banana', 'Mango']); // Resolve with an array
});

const p3 = new Promise((resolve, reject) => {
    resolve({
        user: 'Abubakar', // Resolve with an object
        age: 16
    });
});

const promise_All = Promise.all([p1, p2, p3]); // Wait for all promises to resolve

promise_All.then((response) => {
    console.log(response); // Log the array of resolved values
});

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises
const p_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1); // Resolve after 3 seconds
    }, 3000);
});

const p_2 = new Promise((resolve, reject) => {
    resolve(4); // Resolve immediately
});

const p_3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            user: 'Abubakar', // Resolve with an object after 2 seconds
            age: 16
        });
    }, 2000);
});

const promiseAll = Promise.race([p_1, p_2, p_3]); // Resolve with the first promise to settle

promiseAll.then((response) => {
    console.log(response); // Log the first resolved value
});
