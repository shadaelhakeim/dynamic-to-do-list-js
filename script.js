document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if the task input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item and set its text content
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Event listener to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item and the list item to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = "";
  }

  // Event listener for the add button
  addButton.addEventListener("click", addTask);

  // Event listener for the Enter key press in the task input
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
