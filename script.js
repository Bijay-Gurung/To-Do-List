let input = document.getElementById('input');
let Lists = document.getElementById('node');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to populate the task list from the tasks array
function populateTaskList() {
    Lists.innerHTML = ''; // Clear the existing list
    tasks.forEach(taskText => {
        let newList = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', check);

        let task = document.createElement('p');
        task.textContent = taskText;

        let removebtn = document.createElement('button');
        removebtn.onclick = remove;
        removebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        newList.appendChild(checkbox);
        newList.appendChild(task);
        newList.appendChild(removebtn);

        Lists.appendChild(newList);
    });
}

// Call the function to populate the task list on page load
populateTaskList();

function add() {
    let taskText = input.value;
    if (taskText.trim() === '') {
        return; // Don't add empty tasks
    }

    let newList = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', check);

    let task = document.createElement('p');
    task.textContent = taskText;

    let removebtn = document.createElement('button');
    removebtn.onclick = remove;
    removebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    newList.appendChild(checkbox);
    newList.appendChild(task);
    newList.appendChild(removebtn);

    Lists.appendChild(newList);

    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    input.value = '';
}

function check(event) {
    let task = event.target.nextSibling;
    if (event.target.checked) {
        task.style.textDecoration = 'line-through';
    } else {
        task.style.textDecoration = 'none';
    }
}

function remove() {
    let listItem = this.parentNode;
    let taskText = listItem.querySelector('p').textContent;
    let taskIndex = tasks.indexOf(taskText);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    listItem.parentNode.removeChild(listItem);
}
