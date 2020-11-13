

// Grabbing the variables

const todoTitle = document.querySelector('.todo-title');
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoItem = document.querySelectorAll('li');


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


// Event listeners -------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    getTodos();
})

todoButton.addEventListener('click', function() {
    addTodoClick();
})

todoInput.addEventListener('keydown', function(e) {
    addTodoEnter(e);
}) 

todoList.addEventListener('click', function(e) {
    deleteItem(e);
})
