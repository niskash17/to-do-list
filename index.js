// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  // Create new list item
  var listItem = document.createElement("li");
  listItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="toggleTaskCompletion(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

  // Append the new list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";
}

// Function to toggle task completion
function toggleTaskCompletion(button) {
  var task = button.parentNode;
  task.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(button) {
  var task = button.parentNode;
  var taskList = task.parentNode;
  taskList.removeChild(task);
}
