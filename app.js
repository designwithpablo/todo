

// Grabbing the variables

const todoTitle = document.querySelector('.todo-title');
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoItem = document.querySelectorAll('li');
const monthInput = document.querySelector('.month');
const dayInput = document.querySelector('.day');
const numberOfDay = document.querySelector('.day-number');
const newDate = new Date();


// Functions ---------------------------------------------

function addTodoClick() {

    
        // Grab input value
        const inputValue = todoInput.value;
    
        // Create div wrapping item and button + class 
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('item-div')
    
        // Create the li, insert value and append it to div
        const li = document.createElement('li');
        li.innerText = inputValue;
        itemDiv.appendChild(li);

        // Add it to localStorage
        storage(todoInput.value);
    
        // Create the button and append it to div
        const button = document.createElement('button');
        button.innerText = 'Completed?';
        button.classList.add('target-button')
        itemDiv.appendChild(button);
    
        // Append div to UL
        todoList.appendChild(itemDiv);
    
        // Clear list input
        todoInput.value = '';
       

}

function addTodoEnter(e) {

   if(e.keyCode === 13) {
    // Grab input value
    const inputValue = todoInput.value;

    // Create div wrapping item and button + class 
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('item-div')

    // Create the li, insert value and append it to div
    const li = document.createElement('li');
    li.innerText = inputValue;
    itemDiv.appendChild(li);

    // Add it to localStorage
    storage(todoInput.value);

    // Create the button and append it to div
    const button = document.createElement('button');
    button.innerText = 'Completed?';
    button.classList.add('target-button')
    itemDiv.appendChild(button);

    // Append div to UL
    todoList.appendChild(itemDiv);

    // Clear list input
    todoInput.value = '';
   }

}

function deleteItem(e) {

    const target = e.target;

    if (target.classList[0] === 'target-button') {
        const parent = target.parentElement;
        removeLocalTodos(parent);
        parent.remove();
    }

}

function storage(todo) {

    // Check if there are already items in the local storage
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

}

function getTodos() {

    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo) {

        // Create div wrapping item and button + class 
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('item-div')
    
        // Create the li, insert value and append it to div
        const li = document.createElement('li');
        li.innerText = todo;
        itemDiv.appendChild(li);

        // Create the button and append it to div
        const button = document.createElement('button');
        button.innerText = 'Completed?';
        button.classList.add('target-button')
        itemDiv.appendChild(button);
    
        // Append div to UL
        todoList.appendChild(itemDiv);

    });

}

function removeLocalTodos(todo) {

    // Check if there are already items in the local storage
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // Grabbing the LI inner text of each item
    const todoIndex = todo.children[0].innerText;
    
    todos.splice(todos.indexOf(todoIndex), 1);

    localStorage.setItem('todos', JSON.stringify(todos));

}

function getDate() {
    
    const month = newDate.getMonth();
    const day = newDate.getDay();
    const dayNumber = newDate.getDate();

    console.log(dayNumber);


    
    switch (month) {
        case 0:
            monthInput.innerText = 'January';
            break;
        case 1:
            monthInput.innerText = 'February';
            breakp;
        case 2:
            monthInput.innerText = 'March';
            break
        case 3:
            monthInput.innerText = 'April';
            break;
        case 4:
            monthInput.innerText = 'May';
            break;
        case 5:
            monthInput.innerText = 'June';
            break;
        case 6:
            monthInput.innerText = 'July';
            break;
        case 7:
            monthInput.innerText = 'August';
            break;
        case 8:
            monthInput.innerText = 'September';
            break;
        case 9:
            monthInput.innerText = 'October';
            break;
        case 10: 
            monthInput.innerText = 'November';
            break;
        case 11:
            monthInput.innerText = 'December'
    }

    switch (day) {
        case 0:
            dayInput.innerText = 'Sunday,';
            break;
        case 1:
            dayInput.innerText = 'Monday,';
            break;
        case 2:
            dayInput.innerText = 'Tuesday,';
            break;
        case 3:
            dayInput.innerText = 'Wednesday,';
            break;
        case 4:
            dayInput.innerText = 'Thursday,';
            break;
        case 5:
            dayInput.innerText = 'Friday,';
            break;
        case 6:
            dayInput.innerText = 'Saturday,';
    }

    numberOfDay.innerText = dayNumber;

}


// Event listeners -------------------------------------

// This is to retrieve the todos from localStorage and display them on the screen
document.addEventListener('DOMContentLoaded', function() {
    getTodos();
    getDate();
})

// This is to add an event listener from a click on the mouse
todoButton.addEventListener('click', function() {
    addTodoClick();
})

// This is to add an event listener from the enter key
todoInput.addEventListener('keydown', function(e) {
    addTodoEnter(e);
}) 

// This is to delete an item
todoList.addEventListener('click', function(e) {
    deleteItem(e);
})
