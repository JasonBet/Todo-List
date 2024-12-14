import "./styles.css";
import { ProjectManager } from "./projectManager.js";
import { RenderManager } from "./renderManager.js";
import { EventManager } from "./eventManager.js";

const projManager = new ProjectManager;
const renderManager = new RenderManager;
const eventManager = new EventManager;

// Listen for dispatched events
document.addEventListener("taskCreated", (e) => {
    const {title, description, dueDate, priority} = e.detail;
    projManager.getCurrProject().addTodo({title, description, dueDate, priority});
    renderManager.updateTasks(projManager.getCurrProject());
})

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
projManager.getCurrProject().addTodo({title: "Milk"});

projManager.deleteProject(projManager.projectsArr[1]);
console.log(JSON.stringify(projManager.projectsArr));
console.log(projManager.getProjectNames());

renderManager.renderProjectContainer(projManager.getCurrProject());