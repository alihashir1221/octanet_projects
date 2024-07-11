const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const status = document.createElement('span');
        status.className = 'status';
        status.textContent = 'pending';
        li.appendChild(status);
        todoList.appendChild(li);
        newTaskInput.value = '';
        newTaskInput.focus();
    }
}

function removeTask() {
    const tasks = todoList.querySelectorAll('li');
    tasks.forEach(task => {
        if (task.style.background === 'lightgrey') {
            todoList.removeChild(task);
        }
    });
}

function markCompleted() {
    const tasks = todoList.querySelectorAll('li');
    tasks.forEach(task => {
        if (task.style.background === 'lightgrey' && !task.classList.contains('completed')) {
            task.classList.add('completed');
            const status = task.querySelector('.status');
            status.textContent = 'Done';
            task.style.background = '';
        }
    });
}

todoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.style.background = e.target.style.background === 'lightgrey' ? '' : 'lightgrey';
    }
});

document.getElementById('todo-list').addEventListener('scroll', function() {
    const listItems = document.querySelectorAll('#todo-list li');
    listItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
            item.style.opacity = '0.5';
        } else {
            item.style.opacity = '1';
        }
    });
});
