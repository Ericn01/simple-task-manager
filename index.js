import Task, {tasks} from "./task.js"; 

// Create a task interface and add a task to the array (TESTING)
const testTask = new Task("Task 1", "This is a test task", "High");
testTask.addTask();
testTask.displayTask();

// Function that creates the HTML for a given taskItm
const createTaskItemHTML = (task) => {
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
    // Creating and adding images to the textbox
    const taskImages = document.createElement('div');
    taskImages.className = "task-images";
    const removeTaskImage = document.createElement('img');
    const editTaskImage = document.createElement('img');
    // Changing the source of the images
    removeTaskImage.src = "./images/delete.png";
    removeTaskImage.alt = "Remove task";
    editTaskImage.src = "./images/edit.png";
    editTaskImage.alt = "Edit task";
    // Appending the images to the task image div
    taskImages.appendChild(removeTaskImage);
    taskImages.appendChild(editTaskImage);
    // Adding these elements to the task item
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(taskStatus);
    taskItem.appendChild(taskImages);
    // Adding the task item to the task container
    taskContainer.appendChild(taskItem);
}

// Creating a new task from the form 
const taskSubmitButton = document.querySelector('.add-task');
const handleTaskFormSubmit = (e) => {
    e.preventDefault();
    const {taskName, taskDescription} = e.target;
    const taskName = document.querySelector('#task-name').value;
    const taskDescription = document.querySelector('#task-description').value;
    const taskStatus = document.querySelector('#task-status').value;
    const newTask = new Task(taskName, taskDescription, taskStatus);
    newTask.addTask();
    createTaskItemHTML(newTask);
    document.querySelector('#task-form').reset();
}
taskSubmitButton.addEventListener('click', handleTaskFormSubmit);


// Add task button functionality
const newTask = document.querySelector('.new-task');
newTask.addEventListener('click', () => { 
    const taskForm = document.querySelector('.task-form');
    taskForm.style.display = "block";
});



// Getting the task container 
const taskContainer = document.querySelector('.task-container');
// Creating the task items
tasks.forEach(task => createTaskItemHTML(task));



const formItem = document.querySelectorAll('.form-item');
// Randomly color them
formItem.forEach(item => { 
    item.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});

