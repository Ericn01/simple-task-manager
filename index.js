import Task, {tasks} from "./task.js"; 

// Relevant HTML elements
const newTaskFormBtn = document.querySelector('.new-task');
const addTaskForm = document.querySelector('.add-task-form');

// logic to update a task
const updateTaskLogic = (task) => {

}
// logic to delete a task
const deleteTaskLogic = (task) => {
    task.deleteTask(task.id);
    const taskToDeleteHTML = document.querySelector(`#${task.id}`);
    taskToDeleteHTML.remove();
}
/* As the function name implies, given a priority level (string), the according color is returned*/
const colorTaskByPriority = (priority) => {
    switch (priority) {
        case "High":
            return "#fdad9e";
        case "Medium":
            return "#ffe6b5";
        case "Low":
            return "#d4ffcf";
        default:
            return "#dddddd"; // Should not be possible without tampering with the task object itself
    }
}

// Function that creates the HTML for a given taskItm
const createTaskItemHTML = (task) => {
    const taskItem = document.createElement('div');
    taskItem.className = "task-item";
    taskItem.id = task.id;
    taskItem.style.backgroundColor = colorTaskByPriority(task.priority);
    // Create the heading element container the title and images
    const taskHeading = document.createElement('div');
    taskHeading.className = "task-heading";
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
    removeTaskImage.id = "remove-task";
    editTaskImage.src = "./images/edit.png";
    editTaskImage.alt = "Edit task";
    editTaskImage.id = "edit-task";
    // Appending the images to the task image div
    taskImages.appendChild(removeTaskImage);
    taskImages.appendChild(editTaskImage);
    // Append title and images to the heading
    taskHeading.appendChild(taskTitle);
    taskHeading.appendChild(taskImages);
    // Adding these elements to the task item
    taskItem.appendChild(taskHeading);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(taskStatus);
    // Adding the task item to the task container
    taskContainer.appendChild(taskItem);
    removeTaskImage.addEventListener('click', () => deleteTaskLogic(task));
    editTaskImage.addEventListener('click', () => updateTaskLogic(task));
}

// Creating a new task from the form 
const handleTaskFormSubmit = (e) => {
    e.preventDefault();
    const taskName = document.querySelector('#task-name').value;
    const taskDescription = document.querySelector('#task-desc').value;
    const taskPriority = document.querySelector('#task-priority').value;
    const newTask = new Task(taskName, taskDescription, taskPriority);
    newTask.addTask();
    createTaskItemHTML(newTask);
    newTaskFormBtn.style.display = 'block';
    addTaskForm.style.display = 'none';
    
    return false;
}
// Event listener for the pressing of the 'add task button'
addTaskForm.addEventListener('submit', handleTaskFormSubmit);


// Add task button functionality
let taskFormBtnState = true; // false = form is hidden, true = form is visible. The default state is for the form to be hidden

newTaskFormBtn.addEventListener('click', () => { 
    if (taskFormBtnState === false) {
        addTaskForm.style.display = 'block';
        newTaskFormBtn.src = "./images/less-tasks.png";
    } else{
        addTaskForm.style.display = 'none';
        newTaskFormBtn.src = "./images/more-tasks.png";
    }
    taskFormBtnState = !taskFormBtnState; // Switch the state after a click
});



// Getting the task container 
const taskContainer = document.querySelector('.task-container');
// Creating the task items
tasks.forEach(task => createTaskItemHTML(task));


