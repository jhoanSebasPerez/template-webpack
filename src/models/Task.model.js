/* eslint-disable no-plusplus */
let nextId = 1;

class Task {
    id = nextId++;

    text = '';

    createdAt = new Date();

    constructor(text) {
        this.text = text;
    }
}

export default Task;
