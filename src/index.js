import "./styles.css";
import { ProjectManager } from "./projectManager.js";

const projManager = new ProjectManager;
console.log(projManager);


// Temp initial code to check functionality
projManager.getCurrProject().addTodo({title: "wash dishes"});
projManager.getCurrProject().addTodo({title: "run", dueDate: "01/01/2025"});
projManager.getCurrProject().addTodo({title: "eat", priority: 3});
projManager.getCurrProject().addTodo({title: "sleep", description: "For at least 8 hours"});

projManager.getCurrProject().deleteTodo(projManager.getCurrProject().todos[1]);

projManager.getCurrProject().editTodo(projManager.getCurrProject().todos[2], {priority: 2});
projManager.getCurrProject().editTodo(projManager.getCurrProject().todos[0], {description: "by hand"});


const project2 = projManager.addProject("Long Term Goals");
const project3 = projManager.addProject("Groceries");

