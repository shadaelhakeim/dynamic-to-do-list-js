document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText => {
            const li = createTaskElement(taskText);
            taskList.appendChild(li);
        });
    }

    // Function to create a task list item element
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Event listener to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(li);
            removeTaskFromLocalStorage(taskText);
        };

        li.appendChild(removeButton);
        return li;
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item and set its text content
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item');

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Event listener to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(li);
            removeTaskFromLocalStorage(taskText);
        };

        // Append the remove button to the list item and the list item to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save task to Local Storage
        saveTaskToLocalStorage(taskText);

        // Clear the task input field
        taskInput.value = '';
    }

    // Function to save a task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Event listener for the add button
    addButton.addEventListener('click', addTask);

    // Event listener for the Enter key press in the task input
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
