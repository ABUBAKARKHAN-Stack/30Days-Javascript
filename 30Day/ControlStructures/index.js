// Activity 1 If-Else Statement
// Task 1 
const number = 0
if (number < 0) {
    console.log('Negative');
} else if (number > 0) {
    console.log("Positive");
} else {
    console.log("Zero");
}

// Task 2 
const age = 19
if (age >= 18) {
    console.log("You Can Vote !!");
} else {
    console.log('Not Eligible');
}

// Activity 2 Nested If-Else Statements
// Task 3
function numbers(a, b, c) {
    let largest;

    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }

    console.log(`Largest number is ${largest}`);
}

// Example usage:
numbers(90, 91, 956); // Output: Largest number is 91

// Activity 3 
// Task 4 
const daysInWeek = 4

switch (daysInWeek) {
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursaday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    case 7:
        console.log('Today is Sunday');
        break;
    default:
        console.log('There Are Only 7 Days in a Week :)');
        break;
}

// Task 5 

const totalMarks = 32
switch (true) {
    case totalMarks >= 80 && totalMarks <= 100:
        console.log('A Grade');
        break;
    case totalMarks >= 75 && totalMarks <= 80:
        console.log('B Grade');
        break;
    case totalMarks >= 65 && totalMarks <= 75:
        console.log('C Grade');
        break;
    case totalMarks >= 50 && totalMarks <= 65:
        console.log('D Grade');
        break;
    case totalMarks >= 33 && totalMarks <= 50:
        console.log('E Grade');
        break;
    default:
        console.log('Fail :(');
        break;
}

// Activity 4

const num = 100
console.log(num % 2 === 0 ? "Even" : "Odd");

const year = 2028
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

