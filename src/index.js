import "./styles.css";
import { Project } from "./projects.js";

// Create an array to store projects
let projectsArr = [];

// Create initial default project and add it to array of projects
const project1 = new Project("Today");
projectsArr.push(project1);

// Initialize current/active project (allows to switch focus to other projects)
const currProject = projectsArr[0];


currProject.addTodo({title: "wash dishes"});
currProject.addTodo({title: "run", dueDate: "01/01/2025"});
currProject.addTodo({title: "eat", priority: 3});
currProject.addTodo({title: "sleep", description: "For at least 8 hours"});

currProject.deleteTodo(currProject.todos[1]);

currProject.editTodo(currProject.todos[2], {priority: 2});
currProject.editTodo(currProject.todos[0], {description: "by hand"});

console.log(currProject.todos);
