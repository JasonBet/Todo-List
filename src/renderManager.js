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
        addTaskSideContainer.classList.add("add-task-sidebar");

        // SVG String converted parsed to svg element
        const svgAddTaskString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgAddTaskString, "image/svg+xml");
        const svgAddTaskFromString = doc.documentElement;
        svgAddTaskFromString.classList.add("svg-add-symbol");
        const addTaskText = document.createElement("p");
        addTaskText.textContent = "Add Task";

        addTaskSideContainer.appendChild(svgAddTaskFromString);
        addTaskSideContainer.appendChild(addTaskText);

        const projectsListContainer = document.createElement("div")
        const projectListHead = document.createElement("h2");
        projectListHead.textContent = "Projects";
        const projectsListDiv = document.createElement("div");
        const addProjectButton = document.createElement("button");
        addProjectButton.textContent = "Add Project";

        projectsListContainer.appendChild(projectListHead);
        projectsListContainer.appendChild(projectsListDiv);
        projectsListContainer.appendChild(addProjectButton);

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