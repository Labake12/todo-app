// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);

// Event Handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}
 
// inserting the inner HTML code of the li element by assigning the code string to property innerHTML of the li element.
// li element is added as a child to the ul element, so that it becomes visible in the browser.
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton">mark</button>
        <button name="deleteButton" >Done</button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

// adding another click event handler function for the ul element.
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);

// In case a check button is clicked the checkTodo helper function is called in case a delete button is clicked the deleteTodo helper function is executed
function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');
}
// implementing another click event handler function for the Clear All link.
document.getElementById('clearAll').addEventListener('click', handleClearAll);

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}