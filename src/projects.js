export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todoItem) {
        this.todos.push(todoItem);
    }

    completeTodo(todoItem) {
        const index = this.todos.findIndex(task => task === todoItem);
        this.todos.splice(index, 1);
    }
}
