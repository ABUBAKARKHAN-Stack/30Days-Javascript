// Activity 1 Creating and Exporting Module

// Task 1
export const addNums = (a, b) => {
    return a + b
}

// Task 2
export const person = {
    name: 'abubakar',
    age: 17
}


// Activity 2 Named and Default Exports

// Task 3

function welcomeNote() {
    console.log('Welcome to my Website');
}
function greet() {
    console.log('How are You ?');
}
export {
    welcomeNote,
    greet
}

// Task 4

export default function subtract(a,b) {
    return a-b;
}
 


