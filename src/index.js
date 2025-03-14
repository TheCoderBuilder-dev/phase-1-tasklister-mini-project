document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const priorityInput = document.getElementById("priority");
  const taskList = document.getElementById("tasks");

  if (!form || !taskInput || !priorityInput || !taskList) {
    console.error("One or more elements not found!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (taskInput.value.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    addTask(taskInput.value, priorityInput.value);
    taskInput.value = ""; // Clear input
  });

  function addTask(task, priority) {
    const li = document.createElement("li");
    li.textContent = task;
    li.classList.add(priority); // Apply priority styling

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
});
