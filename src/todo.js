export class Todo {
    constructor(title, description = "", dueDate = "", priority = 0) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}