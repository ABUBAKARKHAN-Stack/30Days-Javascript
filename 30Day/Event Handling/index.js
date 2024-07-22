// Activity 1 Basic Event Handling 

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.querySelector('.click-me').addEventListener('click', () => {
    document.querySelector('.greeting').textContent = 'Hello Hitesh. Welcome to My Website';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const image_Visibility = document.querySelector('.image');
image_Visibility.addEventListener('dblclick', () => {
    image_Visibility.style.display = 'none';
});

// Activity 2 MouseEvent

// Task 3: Add a mouseover event listener to an element that changes its background color.
const mouseOver = document.getElementById('change-bg');
mouseOver.addEventListener('mouseover', () => {
    mouseOver.style.backgroundColor = 'lightgray';
    mouseOver.style.color = '#000';
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
mouseOver.addEventListener('mouseleave', () => {
    mouseOver.style.backgroundColor = 'lightblue';
    mouseOver.style.color = '#fff';
});

// Activity 3 KeyboardEvent

const inputField = document.getElementById('text-field');

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
inputField.addEventListener('keydown', () => {
    console.log('Down Key Pressed');
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
inputField.addEventListener('keyup', () => {
    document.querySelector('.intro').textContent = 'Hey I am Keyup Event';
});

// Activity 4 FormDataEvent

const formData = document.querySelector('form');

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
formData.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formData);
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const dropDown = document.querySelector('#drop-down');
const items = document.querySelector('.item-select');
dropDown.addEventListener('input', () => {
    items.textContent = `You Selected ${dropDown.value} From Dropdown List!`;
});

// Activity 5 Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.querySelector('.list');
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentElem = document.querySelector('.parent');

const para = document.createElement('p');
para.textContent = 'Hello, I am a paragraph';
parentElem.appendChild(para);
para.addEventListener('click', () => {
    para.style.color = 'black';
});
