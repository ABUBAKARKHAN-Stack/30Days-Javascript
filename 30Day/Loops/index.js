// Activity 1: For Loop

// Task 1: Printing numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
   console.log(i);
}

// Task 2: Printing multiplication table of 5 up to 9
for (let i = 1; i < 10; i++) {
   console.log(`5 * ${i} = ${i * 5}`);
}

// Activity 2: While Loop

// Task 3: Incrementing i by 20 until i exceeds 10
let i = 0;
while (i <= 10) {
   i = i + 20;
   console.log(i);
}

// Task 4: Decrementing j from 10 to 1
let j = 10;
while (j >= 1) {
   console.log(j--);
}

// Activity 3: Do-While Loop

// Task 5: Printing numbers from 1 to 5
let k = 1;
do {
   console.log(k++);
} while (k <= 5);

// Task 6: Calculating factorial of a number (5 in this case)
let num = 5;
let n = num;
let factorial = 1;
do {
   factorial *= n;
   n--;
} while (n > 0);
console.log(factorial);

// Task 7: Printing a pattern of stars
let pattern = '';
for (let i = 1; i <= 5; i++) {
   pattern = pattern.concat('*');
   console.log(pattern);
}

// Task 8: Printing multiplication tables from 1 to 10 up to 9
for (let i = 1; i <= 10; i++) {
   console.log(`Table of ${i}:`);
   for (let j = 1; j < 10; j++) {
       console.log(`${i} * ${j} = ${i * j}`);
   }
}

// Task 9: Printing numbers from 1 to 10, skipping 5 using continue
for (let i = 1; i <= 10; i++) {
   if (i === 5) {
       continue;
   }
   console.log(i);
}

// Task 10: Printing numbers from 1 to 7, stopping at 8 using break
for (let i = 1; i <= 10; i++) {
   if (i === 8) {
       break;
   }
   console.log(i);
}
