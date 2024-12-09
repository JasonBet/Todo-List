export class RenderManager {
    constructor() {
        const contentContainer = document.createElement("div");
        const sidebarContainer = document.createElement("div");
        const projectContainer = document.createElement("div");

        contentContainer.classList.add("content-container");
        sidebarContainer.classList.add("sidebar-container");
        projectContainer.classList.add("project-container");

        // Initialize Sidebar Content
        const addTaskSideContainer = document.createElement("div");
        addTaskSideContainer.textContent = "add task";
        const projectsListContainer = document.createElement("div")
        projectsListContainer.textContent = "Projects";

        sidebarContainer.appendChild(addTaskSideContainer);
        sidebarContainer.appendChild(projectsListContainer);

        // Initialize Project Content
        const projectName = document.createElement("h1");
        projectName.textContent = "Project Name";
        const tasksContainer = document.createElement("div");
        const deleteProjButton = document.createElement("button");
        deleteProjButton.textContent = "Delete Project";

        projectContainer.appendChild(projectName);
        projectContainer.appendChild(tasksContainer);
        projectContainer.appendChild(deleteProjButton);

        contentContainer.appendChild(sidebarContainer);
        contentContainer.appendChild(projectContainer);

        document.body.appendChild(contentContainer);
    }

    
}