import "./styles.css";
import { ProjectManager } from "./projectManager.js";
import { RenderManager } from "./renderManager.js";
import { EventManager } from "./eventManager.js";
import { storage } from "./localstore.js";

const projManager = new ProjectManager;
const renderManager = new RenderManager;
const eventManager = new EventManager;

// Listen for dispatched events
document.addEventListener("taskCreated", (e) => {
    const {title, description, dueDate, priority} = e.detail;
    projManager.getCurrProject().addTodo({title, description, dueDate, priority});
    renderManager.updateTasks(projManager.getCurrProject());
    storage(projManager.projectsArr);
})

document.addEventListener("projectCreated", (e) => {
    const {title} = e.detail;
    console.log(e.detail);
    projManager.addProject(title);
    renderManager.renderPage(projManager.getProjectNames(), projManager.getCurrProject());
    storage(projManager.projectsArr);
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
    storage(projManager.projectsArr);
})

document.addEventListener("completeTask", (e) => {
    const { index } = e.detail;
    const currProject = projManager.getCurrProject();

    if (index >= 0 && index < currProject.todos.length) {
        currProject.todos.splice(index, 1);
        renderManager.renderPage(projManager.getProjectNames(), currProject);
    }
    storage(projManager.projectsArr);
});

document.addEventListener("editTodoItem", (e) => {
    const { index } = e.detail;
    const currProject = projManager.getCurrProject();
    const todoItem = currProject.todos[index];

    const editTaskDialog = document.createElement("dialog");
    const form = document.createElement("form");

    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("value", todoItem.title);

    const description = document.createElement("input");
    description.setAttribute("type", "text");
    description.setAttribute("name", "description");
    description.setAttribute("placeholder", "Description");
    description.setAttribute("value", todoItem.description);

    const dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("value", todoItem.dueDate);

    const priority = document.createElement("input");
    priority.setAttribute("type", "number");
    priority.setAttribute("name", "priority");
    priority.setAttribute("placeholder", "Priority");
    priority.setAttribute("value", todoItem.priority);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Update Task";

    const cancelButton = document.createElement("button");
    cancelButton.formNoValidate = true;
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        editTaskDialog.close();
        form.reset();
    });

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    editTaskDialog.appendChild(form);
    document.body.appendChild(editTaskDialog);
    editTaskDialog.showModal();

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        todoItem.title = title.value;
        todoItem.description = description.value;
        todoItem.dueDate = dueDate.value;
        todoItem.priority = parseInt(priority.value, 10);

        renderManager.renderPage(projManager.getProjectNames(), currProject); // Re-render tasks
        editTaskDialog.close();
    });
    storage(projManager.projectsArr);
});


renderManager.renderPage(projManager.getProjectNames(), projManager.getCurrProject());

storage(projManager.projectsArr);