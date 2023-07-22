import Task, {tasks} from "./task.js"; 

// Relevant HTML elements
const newTaskFormBtn = document.querySelector('.new-task');
const addTaskForm = document.querySelector('.add-task-form');
// Create a task interface and add a task to the array (TESTING)
const testTask = new Task("Task 1", "This is a test task", "High");
testTask.addTask();
testTask.displayTask();

// logic to update a task
const updateTaskLogic = (task) => {

}
// logic to delete a task
const deleteTaskLogic = (task) => {
    task.deleteTask(task.id);
    const taskToDeleteHTML = document.querySelector(`#${task.id}`);
    taskToDeleteHTML.remove();
}

// Function that creates the HTML for a given taskItm
const createTaskItemHTML = (task) => {
    const taskItem = document.createElement('div');
    taskItem.className = "task-item";
    taskItem.id = task.id;
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


