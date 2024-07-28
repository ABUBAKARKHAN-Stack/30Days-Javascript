console.log('Classes In JS');

// Activity 1: Class Definition

// Define a class 'Person' with properties 'name' and 'age', and a method for a greeting message.
class Person {
    constructor(name, age) {
        // Initialize properties 'name' and 'age' using constructor parameters.
        this.name = name;
        this.age = age;
    }

    // Method to return a personalized greeting message.
    greetingMessage() {
        return console.log(`Hello ${this.name} Welcome To Our Website. You Can Use Our Website Because According To Your ${this.age} You Are Eligible.`);
    }

    // Method to update the 'age' property of the instance.
    updateAge(updateage) {
        // Update the age property with the new value.
        this.age = updateage;
        // Return a message indicating the updated age.
        return `Age updated to ${this.age}`;
    }
}

// Create an instance of 'Person' with name 'Alex' and age 20.
let user = new Person('Alex', 20);

// Task 1: Call the 'greetingMessage' method to display a welcome message.
console.log(user.greetingMessage());

// Task 2: Update the age of the user and display the updated age.
console.log(user.updateAge(90));

// Activity 2: Class Inheritance

// Define a class 'Student' that extends the 'Person' class.
class Student extends Person {
    // Static property to keep track of the number of student instances.
    static StudentsCount = 0;

    // Constructor for the 'Student' class, including 'studentId'.
    constructor(name, age, studentId) {
        // Call the parent class constructor with 'name' and 'age'.
        super(name, age);
        // Initialize 'studentId' property.
        this.studentId = studentId;
        // Increment the static 'StudentsCount' for each new instance.
        Student.StudentsCount++;
    }

    // Method to return the student ID.
    studentID() {
        return `Student ID is ${this.studentId}`;
    }

    // Override the greeting method to include the student ID.
    greetingMessage() {
        return console.log(`Welcome Student To Our Campus Your Student ID is ${this.studentId}`);
    }
}

// Task 3: Create an instance of 'Student' and display the student ID.
let student = new Student('John', 22, 9021);
console.log(student.studentID());

// Display the total number of students created.
console.log(Student.StudentsCount);

// Task 4: Call the overridden 'greetingMessage' method for the student.
console.log(student.greetingMessage());

// Activity 3: Static Methods

// Define a class 'Person1' with a static method.
class Person1 {
    constructor(name) {
        // Initialize property 'name'.
        this.name = name;
    }

    // Static method to display a generic greeting message.
    static greetToUser(name) {
        console.log(`Hello ${name} Welcome !!`);
    }
}

// Task 5: Call the static method to greet a user.
console.log(Person1.greetToUser('Harry'));

// Activity 4: Getters and Setters

// Define a class 'Person2' with properties 'name' and 'lastName'.
class Person2 {
    constructor(name, lastName) {
        // Initialize 'name' and 'lastName' properties.
        this.name = name;
        this.lastName = lastName;
    }

    // Getter method to return the full name.
    get getPersonFullName() {
        return `First Name is ${this.name} , Last Name is ${this.lastName} And Full Name is ${this.name} ${this.lastName}`;
    }

    // Setter method to update the full name, splitting it into 'name' and 'lastName'.
    set setPersonFullName(FullName) {
        [this.name, this.lastName] = FullName.split(' ');
    }
}

// Create an instance of 'Person2' with initial names.
let fullName = new Person2('Alex', 'Diaz');

// Task 6: Use the getter to display the full name.
console.log(fullName.getPersonFullName);

// Task 7: Use the setter to update the full name and display it again.
fullName.setPersonFullName = "Lance Vance";
console.log(fullName.getPersonFullName);
