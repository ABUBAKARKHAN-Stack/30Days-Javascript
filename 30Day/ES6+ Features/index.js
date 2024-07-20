// Activity 1: Template Literals

// Task 1: Declaring variables and creating a string using template literals
const name = 'Abubakar';
const age = 16;
const myIntro = `Hello my Name is ${name} and I'm ${age} Year Old`;
console.log(myIntro);  // Output: Hello my Name is Abubakar and I'm 16 Year Old

// Task 2: Creating a multi-line paragraph using template literals
const para = `The morning sun peered through the clouds, casting a warm, golden light over the sleepy town. As the birds sang their cheerful songs and the leaves rustled gently in the breeze, the day promised to unfold with a sense of tranquility and hope. Little did anyone know that this simple start would lead to unexpected adventures and delightful surprises.`;
console.log(para);  // Output: The morning sun peered through the clouds, ...

// Activity 2: Destructuring

// Task 3: Declaring an array and accessing its elements using destructuring
const myArr = [1, 2, 3, 4, 5];
console.log(myArr[0], myArr[1]);  // Output: 1 2

// Task 4: Declaring an object and accessing its properties using template literals
const myBook = {
    title: 'Long Live',
    author: 'Zordic Alex',
    year: 2002
};
console.log(`Book Name ${myBook.title}, Author Name ${myBook.author}`);  // Output: Book Name Long Live, Author Name Zordic Alex

// Activity 3: Spread and Rest Operators

// Task 5: Merging two arrays using the spread operator
const myArr1 = [1, 2, 3, 4, 5];
const myArr2 = [6, 7, 8, 9, 10];
const mergeArr = [...myArr1, ...myArr2];
console.log(mergeArr);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Task 6: Creating a function that uses the rest operator to sum an arbitrary number of arguments
function sumOfArbitraryNums(...numbers) {
    return numbers.reduce((number, acc) => number + acc, 0);
}
console.log(sumOfArbitraryNums(1, 3, -5, 11));  // Output: 10

// Activity 4: Default Parameters

// Task 7: Creating a function with a default parameter
function product(num, defaultVal = 1) {
    return defaultVal * num;
}
console.log(product(2));  // Output: 2

// Activity 5: Enhanced Object Literals

// Task 8: Creating an object using the Object constructor and adding properties to it
const myObj = new Object();
myObj.name = 'Abubakar';
myObj.age = 16;
console.log(myObj);  // Output: { name: 'Abubakar', age: 16 }

// Task 9: Creating an object with computed property names
const username = 'Name';
const userAge = 'Age';
const jsUser = {
    [username]: 'Abubakar',
    [userAge]: 16
};
console.log(jsUser);  // Output: { Name: 'Abubakar', Age: 16 }
