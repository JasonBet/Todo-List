import "./styles.css";
import { Project } from "./projects.js";
import { Todo } from "./todo.js";

// Create an array to store projects
let projectsArr = [];

// Create initial default project and add it to array of projects
const project1 = new Project("Today");
projectsArr.push(project1);

// Initialize current/active project (allows to switch focus to other projects)
const currProject = projectsArr[0];


currProject.addTodo("wash dishes");
currProject.addTodo("run");
currProject.addTodo("eat");
currProject.addTodo("sleep", "for at least 8 hours");

console.log(projectsArr);
console.log(currProject.todos);

currProject.completeTodo(currProject.todos[1]);
console.log(currProject.todos);
