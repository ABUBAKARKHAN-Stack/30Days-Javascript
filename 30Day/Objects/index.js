// Activity 1 Object Creation And Access

// Task 1: Creating an object named 'book' with properties: title, author, and year.
const book = {
    title: "Cosmus", // Title of the book
    author: "Carl Sagan", // Author of the book
    year: 1954 // Year of publication
}

// Task 2: Logging the 'book' object to the console.
console.log(book);

// Activity 2 Object Methods

// Task 3: Creating an object named 'book2' with a method that logs a given year.
const book2 = {
    title: "I Wandered Lonely as a Cloud", // Title of the book
    author: "William Wordsworth", // Author of the book
    year: function (year) { // Method to log the updated year
        console.log(`The Updated Year is ${year}`);
    }
}
// Logging the title and author of 'book' to the console.
console.log(book.title.toString());
console.log(book.author.toString());

// Task 4: Calling the 'year' method of 'book2' and logging the result.
console.log(book2.year(1920));

// Activity 3 Nested Objects

// Creating a nested object named 'Library' with an array of books.
const Library = {
    name: "City Library", // Name of the library
    books: [ // Array of book objects
        {
            title: "Beloved", // Title of the book
            author: "Toni Morrison", // Author of the book
            year: 1987 // Year of publication
        },
        {
            title: "Cosmos", // Title of the book
            author: "Carl Sagan", // Author of the book
            year: 1980 // Year of publication
        }
    ]
}

// Task 5: Logging the 'Library' object to the console.
console.log(Library);

// Task 6: Logging the name of the library and the titles of all books in the library.
console.log(Library.name);
Library.books.forEach(book => {
    console.log(book.title); // Logging each book title
});

// Activity 4 This Keyword

// Task 7: Adding a method to the 'book' object that returns the book's title and year using 'this' keyword.
book.getTitleYear = function () {
    return `The Book Title is ${this.title} and Publish Year is ${this.year}`;
}

// Logging the result of calling the 'getTitleYear' method.
console.log(book.getTitleYear());

// Activity 5 Object Iteration

// Task 8: Creating an object named 'myBook' and iterating over its properties using a for...in loop.
const myBook = {
    name: 'History of Web Development', // Title of the book
    author: "Abubakar", // Author of the book
    year: 2024 // Year of publication
}

for (const key in myBook) {
    if (myBook.hasOwnProperty.call(myBook, key)) { // Checking if the property is a direct property of the object
        const element = myBook[key];
        console.log(element); // Logging the property value
    }
}

// Task 9: Using Object.keys and Object.values to log all keys and values of the 'myBook' object.
const myKeys = Object.keys(myBook); // Getting all keys of the 'myBook' object
const myValues = Object.values(myBook); // Getting all values of the 'myBook' object
console.log(myKeys, myValues); // Logging the keys and values
