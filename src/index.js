import "./styles.css";
import { ProjectManager } from "./projectManager.js";
import { RenderManager } from "./renderManager.js";

const projManager = new ProjectManager;
const renderManager = new RenderManager;

renderManager.renderSidebarContainer(projManager.getProjectNames());

// Temp initial code to check functionality
projManager.getCurrProject().addTodo({title: "wash dishes"});
projManager.getCurrProject().addTodo({title: "run", dueDate: "01/01/2025"});
projManager.getCurrProject().addTodo({title: "eat", priority: 3});
projManager.getCurrProject().addTodo({title: "sleep", description: "For at least 8 hours"});

projManager.getCurrProject().deleteTodo(projManager.getCurrProject().todos[1]);

projManager.getCurrProject().editTodo(projManager.getCurrProject().todos[2], {priority: 2});
projManager.getCurrProject().editTodo(projManager.getCurrProject().todos[0], {description: "by hand"});


projManager.addProject("Long Term Goals");
projManager.addProject("Groceries");

// Test projManager ability to switch projects and add tasks
projManager.setCurrProject(projManager.projectsArr[1]);
projManager.getCurrProject().addTodo({title: "Get a job", priority: 3});

projManager.setCurrProject(projManager.projectsArr[2]);
projManager.getCurrProject().addTodo({title: "Bananas"});

projManager.deleteProject(projManager.projectsArr[1]);
console.log(JSON.stringify(projManager.projectsArr));
console.log(projManager.getProjectNames());
