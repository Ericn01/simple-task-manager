class Task {
    constructor(name, description, status) {
        this.id = null;
        this.name = name;
        this.description = description;
        this.status = status;
        this.created_at = Date.now();
        this.updated_at = null;
    }
    displayTask() {
        console.log(`Task: ${this.name} \nDescription: ${this.description} \nStatus: ${this.status}`);
    }
}

export default Task;