// Activity 1: Understanding Closures
// Task 1: Function that returns another function accessing a variable from outer scope
function outer() {
    let user = 'XYZ'; // Variable in outer function's scope
    function inner() { // Inner function accessing outer scope variable
        console.log(user);
    }
    inner(); // Call inner function
}
outer(); // Execute outer function

// Task 2: Closure maintaining a private counter with increment and getCount functions
function counter() {
    let count = 0; // Private variable
    return {
        increment: function() { // Function to increment count
            count++;
            console.log('Count is', count);
        },
        getCount: function() { // Function to get current count
            return count;
        }
    };
}

const counterInstance = counter();
counterInstance.increment(); // Increment count
counterInstance.increment(); // Increment count again
console.log(counterInstance.getCount()); // Retrieve count

// Activity 2: Practical Closures
// Task 3: Function to generate unique IDs
function uniqueIdGenerator() {
    let currentId = 0; // Start with ID 0
    return function() { // Closure to access and increment currentId
        currentId++;
        console.log(`The Last Generated ID Was ${currentId}`);
        return currentId;
    };
}

let generateId = uniqueIdGenerator(); // Create ID generator
generateId(); // Generate first ID
generateId(); // Generate second ID
generateId(); // Generate third ID

// Task 4: Closure that greets a user by name
function userGreet(username) {
    function greet() { // Inner function capturing username
        console.log(`Welcome ${username}, Let's Learn JS From Hitesh`);
    }
    return greet; // Return the greet function without calling it
}

let greeting = userGreet('Hitesh'); // Create greeting function
greeting(); // Execute the returned function

// Activity 3: Closures in Loops
// Task 5: Loop creating an array of functions to log the correct index
const myArr = [];
for (let i = 0; i < 3; i++) {
    myArr[i] = (function(index) { // Closure to capture current index
        return function() {
            console.log(`The Current index is ${index}`);
        };
    })(i);
}
myArr[0](); // Logs index 0
myArr[1](); // Logs index 1
myArr[2](); // Logs index 2

// Activity 4: Module Pattern
// Task 6: Simple module for managing items
const itemManager = (function() {
    let items = []; // Private array to store items
    return {
        addItem: function(item) { // Add item to list
            items.push(item);
            console.log('Item added', item);
        },
        removeItem: function(item) { // Remove item from list
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`Item Removed: ${item}`);
            }
        },
        listItems: function() { // List all items
            console.log(`Items: ${items.join(', ')}`);
        }
    };
})();

itemManager.addItem('book');
itemManager.addItem('pen');
itemManager.listItems();
itemManager.removeItem('book');
itemManager.listItems();

// Activity 5: Memoization
// Task 7: Memoization function to store results of computations
function memoize(fn) {
    const cache = {}; // Cache object to store results
    return function(...args) {
        const key = JSON.stringify(args); // Serialize arguments as cache key
        if (cache[key]) {
            console.log(`Fetch Data From Key ${args}`);
            return cache[key]; // Return cached result
        } else {
            console.log(`Calculating Result from args: ${args}`);
            const result = fn(...args); // Call function with arguments
            cache[key] = result; // Cache the result
            return result;
        }
    };
}

const factorial = memoize(function(num) {
    if (num <= 1) return 1; // Base case
    return num * factorial(num - 1); // Recursive case
});

console.log(factorial(5)); // Output: Calculating result for args: 5 ... Result: 120
console.log(factorial(5)); // Output: Fetching from cache for args: 5 ... Result: 120
