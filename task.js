import generateID from "./generateID.js";

// Purpose: Creates a new task object
class TaskInterface {
    constructor(tasks, name, description, status) {
        this.tasks = tasks;
        this.id = generateID(tasks);
        this.name = name;
        this.description = description;
        this.status = status;
        this.created_at = Date.now();
        this.updated_at = null;
    }
    // Adds a new task to the array
    addTask() {
        this.tasks.push(this);
        localStorage.setItem("userTasks", JSON.stringify(this.tasks));
    }
    // Updates an existing task
    updateTask() {
        console.log("Updating task...");
    }
    /* Removes a task from the array */
    deleteTask(taskID) {
        this.tasks.splice(tasks.findIndex(task => task.id === taskID), 1);
        localStorage.setItem("userTasks", JSON.stringify(tasks));
    }
    displayTask() {
        console.log(`Task: ${this.name} \nDescription: ${this.description} \nStatus: ${this.status}`);
    }
}

export default TaskInterface;