// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const myArr = [1, 2, 3, 4, 5];
console.log(myArr); // Logs: [1, 2, 3, 4, 5]

// Task 2: Access the first and last elements of the array and log them to the console.
const myArr2 = [2, 4, 6, 8, 10];
console.log(myArr2[0]); // Logs: 2 (first element)
console.log(myArr2[4]); // Logs: 10 (last element)

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const myArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myArr3.push(10);
console.log(myArr3); // Logs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
const myArr4 = [1, 2, 3, 4, 5, 6];
myArr4.pop();
console.log(myArr4); // Logs: [1, 2, 3, 4, 5]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
const myArr5 = [2, 3, 4, 5];
myArr5.shift();
console.log(myArr5); // Logs: [3, 4, 5]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const myArr6 = [2, 3, 4, 5];
myArr6.unshift(1);
console.log(myArr6); // Logs: [1, 2, 3, 4, 5]

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const myArr7 = [5, 10, 15, 20, 25];
const myArr7New = myArr7.map((num) => num + 10);
console.log(myArr7New); // Logs: [15, 20, 25, 30, 35]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const myArr8 = [1, 2, 3, 5, 7, 8, 9, 11, 14];
const myArr8New = myArr8.filter((num) => num % 2 !== 0);
console.log(myArr8New); // Logs: [1, 3, 5, 7, 9, 11]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const myArr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myArr9New = myArr9.reduce((acc, curVal) => {
    return acc + curVal;
}, 0);
console.log(myArr9New); // Logs: 55

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
const myArr10 = ['Superman', 'Batman', 'Spiderman', 'Aquaman'];
for (let i = 0; i < myArr10.length; i++) {
    const element = myArr10[i];
    console.log(element); // Logs each element: 'Superman', 'Batman', 'Spiderman', 'Aquaman'
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
const myArr11 = ['Banana', 'Apple', 'Peach', 'Watermelon'];
myArr11.forEach(element => {
    console.log(element); // Logs each element: 'Banana', 'Apple', 'Peach', 'Watermelon'
});

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const myArr12 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];
for (let i = 0; i < myArr12.length; i++) {
    const element = myArr12[i];
    console.log(element); // Logs each row: [1, 0, 0], [0, 1, 0], [0, 0, 1]
}

// Task 13: Access and log a specific element from the two-dimensional array.
const myArr13 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];
for (let i = 0; i < myArr13.length; i++) {
    const element = myArr13[i];
    console.log(element[1]); // Logs the second element of each row: 0, 1, 0
}
