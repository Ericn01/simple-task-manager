import TaskInterface from "./task.js"; 

// Stateful array containing all tasks
const tasks = JSON.parse(localStorage.getItem("userTasks")) || []; // starts as an empty array 

// Create a task interface
const taskInterface = new TaskInterface(tasks, "Task 1", "This is a task", "Incomplete");
taskInterface.addTask();

// Getting the task container 
const taskContainer = document.querySelector('.task-container');

// Creating the task items
tasks.forEach(task => { 
    const taskItem = document.createElement('div');
    taskItem.className = "task-item";
    // Adding the title of the task
    const taskTitle = document.createElement('h2');
    taskTitle.className = "task-title";
    taskTitle.textContent = task.name;
    // Adding the description of the task
    const taskDescription = document.createElement('p');
    taskDescription.className = "task-description";
    taskDescription.textContent = task.description;
    // Adding the checkbox and changing the status of the task based off that
    const taskStatus = document.createElement('input');
    taskStatus.type = "checkbox";
    taskStatus.className = "task-status";
    task.status === "Complete" ? taskStatus.checked = true : taskStatus.checked = false;
    // Adding these elements to the task item
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(taskStatus);
    // Adding the task item to the task container
    taskContainer.appendChild(taskItem);
});

const formItem = document.querySelectorAll('.form-item');
// Randomly color them
formItem.forEach(item => { 
    item.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});