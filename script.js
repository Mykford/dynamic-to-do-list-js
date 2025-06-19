document.addEventListener("DOMContentLoaded", function () {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Step 3: Create the addTask Function
  function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Step 4: Task Creation and Removal
    // Create a new li element and set its content
    const listItem = document.createElement("li");

    // Create a span for the task text
    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Assign an onclick event to the remove button
    removeButton.onclick = function () {
      // Add a fade-out animation before removing
      listItem.style.animation = "slideIn 0.3s ease-out reverse";
      setTimeout(() => {
        taskList.removeChild(listItem);
      }, 250);
    };

    // Append the task text and remove button to the li element
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    // Append the li to taskList
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = "";

    // Focus back on input for better UX
    taskInput.focus();
  }

  // Step 5: Attach Event Listeners
  // Add event listener to addButton for click events
  addButton.addEventListener("click", addTask);

  // Add event listener to taskInput for keypress events (Enter key)
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Focus on input field when page loads
  taskInput.focus();
});
