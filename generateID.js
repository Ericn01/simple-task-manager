const idOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'
                , 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const ID_LENGTH = 10;

// Purpose: Generates a random 10 digit ID for the user to use (incredibly low chance of two ids being the same). If the same id already exists, a new one will be created.
const generateID = (tasks) => {
    let id = '';
    // First 5 characters are part of the 'other characters' array
    for (let i = 0; i < ID_LENGTH; i++) {
        id += idOptions[Math.floor(Math.random() * idOptions.length)];
    }
    // If the id already exists, run a loop until you find one that doesn't match an existing one.
    while (tasks.some(task => task.id === id)) {
        id = generateID(tasks);
    }
    // note: there is still a possibility, but a * very * low one that the id will be the same as another id
    return id;
}

export default generateID;