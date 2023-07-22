import generateID from "./generateID.js"
// Stateful array containing all tasks
const tasks = [];
if (localStorage.getItem("userTasks") !== ""){
    localStorage.setItem("userTasks", JSON.stringify([]));
} else {
    console.log("User tasks found!");
    tasks = JSON.parse(localStorage.getItem("userTasks")) | []; // starts as an empty array 
}


// Purpose: Creates a new task object
class Task {
    constructor(name, description, priority) {
        this.id = generateID(tasks);
        this.name = name;
        this.description = description;
        this.status = "Incomplete";
        this.priority = priority;
        this.created_at = Date.now();
        this.updated_at = null;
    }
    // Adds a new task to the array
    addTask() {
        tasks.push(this); // add the current task object into the array
        localStorage.setItem("userTasks", JSON.stringify(tasks)); // commit the tasks array to local storage.
    }
    // Updates an existing task
    updateTask(newName, newDescription, newPriority) {
        this.newName = newName;
        this.newDescription = newDescription;
        this.newPriority = newPriority;
        this.updated_at = Date.now();
    }
    // Complete task
    completeTask() {
        this.status = "Complete";
    }
    /* Removes a task from the array */
    deleteTask(taskID) {
        tasks.splice(tasks.findIndex(task => task.id === taskID), 1);
        localStorage.setItem("userTasks", JSON.stringify(tasks));
    }
    // Updates an existing task
    displayTask() {
        console.log(`TaskID: ${this.id} \nTask: ${this.name} \nDescription: ${this.description} \nStatus: ${this.status}`);
    }
}

export default Task;
export {tasks}; // exporting the tasks array so that it can be used in other files
