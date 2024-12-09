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

    getTodoIndex(todoItem) {
        return this.todos.findIndex(task => task === todoItem);
    }

    deleteTodo(todoItem) {
        this.todos.splice(this.getTodoIndex(todoItem), 1);
    }

    editTodo(todoItem, {title = todoItem.title, 
        description = todoItem.description, dueDate = todoItem.dueDate, 
        priority = todoItem.priority}) {
        todoItem.title = title;
        todoItem.description = description;
        todoItem.dueDate = dueDate;
        todoItem.priority = priority;
    }
}
