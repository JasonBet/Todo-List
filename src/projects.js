import { Todo } from "./todo.js";

export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo({title, description = "", dueDate = "", priority = 0}) {
        const todoItem = new Todo(title, description, dueDate, priority);
        this.todos.push(todoItem);
    }

    completeTodo(todoItem) {
        const index = this.todos.findIndex(task => task === todoItem);
        this.todos.splice(index, 1);
    }
}
