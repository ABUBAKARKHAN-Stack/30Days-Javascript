// Activity 1: Selecting and Manipulating Elements

// Task 1: Change the text content of the element with the ID 'paragraph'
document.getElementById('paragraph').textContent = 'I am 16 Years Old :)'

// Task 2: Change the background color of the first element with the class 'div' to red
document.querySelector('.div').style.backgroundColor = 'red'

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element, set its inner HTML to contain a heading, and append it to the body
const newDiv = document.createElement('div')
newDiv.innerHTML = '<h1>Hello World</h1>'
document.body.appendChild(newDiv)

// Task 4: Create a new list item element, set its text content to 'Banana', and append it to the first ul element
const li = document.createElement('li')
li.textContent = 'Banana'
document.querySelector('ul').appendChild(li)

// Activity 3: Removing Elements

// Task 5: Select the first element with the class 'Learning' and remove it from the body
const learn = document.querySelector('.Learning')
// Uncomment the next line to actually remove the element
// document.body.removeChild(learn)

// Task 6: Remove the last child element of the body
document.body.lastChild.remove()

// Activity 4: Modifying Attributes / CSS Classes

// Task 7: Change the 'src' attribute of the first img element to a new image URL
document.querySelector('img').src = "https://images.pexels.com/photos/10147934/pexels-photo-10147934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

// Task 8: Remove the 'container' class from the first element with the class 'main'
document.querySelector('.main').classList.remove('container')

// Activity 5: Event Handling

// Task 9: Add a click event listener to the first button element that changes the text content of the element with the class 'targeted'
const btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.targeted').textContent = 'Hello Hitesh'
})

// Task 10: Add a mouseover event listener to the first element with the class 'div' that changes its border style
const box = document.querySelector('.div')
box.addEventListener('mouseover', () => {
    box.style.border = '2px solid black'
})
