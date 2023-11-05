function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var pendingTasks = document.getElementById("pending-tasks");
        var newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        pendingTasks.appendChild(newTask);
        taskInput.value = "";
    }
}

function completeTask(button) {
    var completedTasks = document.getElementById("completed-tasks");
    var task = button.parentElement;
    completedTasks.appendChild(task);
    button.remove();
}

function deleteTask(button) {
    var task = button.parentElement;
    task.remove();
}
