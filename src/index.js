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

document.addEventListener("projectCreated", (e) => {
    const {title} = e.detail;
    console.log(e.detail);
    projManager.addProject(title);
    renderManager.renderPage(projManager.getProjectNames(), projManager.getCurrProject());
})

document.addEventListener("switchProject", (e) => {
    const {title} = e.detail;
    projManager.projectsArr.forEach(project => {
        if(project.name === title){
            projManager.setCurrProject(project);
            renderManager.renderPage(projManager.getProjectNames(), projManager.getCurrProject());
        }
    })
})

document.addEventListener("deleteProject", () => {
    projManager.deleteProject(projManager.getCurrProject());
    projManager.setCurrProject(projManager.projectsArr[0]);
    renderManager.renderPage(projManager.getProjectNames(), projManager.getCurrProject());
})

document.addEventListener("completeTask", (e) => {
    const { index } = e.detail;
    const currProject = projManager.getCurrProject();

    if (index >= 0 && index < currProject.todos.length) {
        currProject.todos.splice(index, 1);
        renderManager.renderPage(projManager.getProjectNames(), currProject);
    }
});

renderManager.renderPage(projManager.getProjectNames(), projManager.getCurrProject());