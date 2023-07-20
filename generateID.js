const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'
                , 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Creating a general list of other random characters
const otherCharacters = ['[', ']', '{', '}', '(', ')', '<', '>', '/', '?', ';', ':', '"', "'", ',', '.', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '|'];

const ID_LENGTH = 10;
// Purpose: Generates a random 10 digit ID for the user to use (incredibly low chance of two ids being the same). If the same id already exists, a new one will be created.

const generateID = (tasks) => {
    let id = '';
    // First 5 characters are part of the 'other characters' array
    for (let i = 0; i < ID_LENGTH; i++) {
        if (i < 5) {
            id += otherCharacters[Math.floor(Math.random() * otherCharacters.length)];
        } 
        // Next 5 characters are part of the 'letters' array
        else {
            id += letters[Math.floor(Math.random() * letters.length)];
        }
    }
    // If the id already exists, generate a new one
    if (tasks.some(task => task.id === id)) {
        id = generateID(tasks);
    }
    // note: there is still a possibility, but a * very * low one that the id will be the same as another id
    return id;
}

export default generateID;