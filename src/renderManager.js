export class RenderManager {
    constructor() {
        this.contentContainer = document.createElement("div");
        this.sidebarContainer = document.createElement("div");
        this.projectContainer = document.createElement("div");

        this.contentContainer.classList.add("content-container");
        this.sidebarContainer.classList.add("sidebar-container");
        this.projectContainer.classList.add("project-container");

        // Initialize Sidebar Content
        this.addTaskSideContainer = document.createElement("div");
        this.addTaskSideContainer.classList.add("add-task-sidebar", "action-add-task");

        // SVG String converted parsed to svg element
        this.svgAddTaskString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
        this.parser = new DOMParser();
        this.doc = this.parser.parseFromString(this.svgAddTaskString, "image/svg+xml");
        this.svgAddTaskFromString = this.doc.documentElement;
        this.svgAddTaskFromString.classList.add("svg-add-symbol", "action-add-task");
        this.addTaskText = document.createElement("p");
        this.addTaskText.classList.add("action-add-task");
        this.addTaskText.textContent = "Add Task";

        this.addTaskSideContainer.appendChild(this.svgAddTaskFromString);
        this.addTaskSideContainer.appendChild(this.addTaskText);

        this.projectsListContainer = document.createElement("div");
        this.projectsListContainer.classList.add("projects-sidebar-container");
        this.projectListHead = document.createElement("h2");
        this.projectListHead.textContent = "Projects";
        this.projectsListDiv = document.createElement("div");
        this.projectsListDiv.classList.add("projects-list-div");
        this.addProjectButton = document.createElement("button");
        this.addProjectButton.classList.add("action-add-project");
        this.addProjectButton.textContent = "Add Project";

        this.projectsListContainer.appendChild(this.projectListHead);
        this.projectsListContainer.appendChild(this.projectsListDiv);
        this.projectsListContainer.appendChild(this.addProjectButton);

        this.sidebarContainer.appendChild(this.addTaskSideContainer);
        this.sidebarContainer.appendChild(this.projectsListContainer);

        // Initialize Project Content
        this.projectName = document.createElement("h1");
        this.projectName.classList.add("project-header");
        this.projectName.textContent = "Project Name";
        this.tasksContainer = document.createElement("div");
        this.tasksContainer.classList.add("tasks-container");
        this.deleteProjButton = document.createElement("button");
        this.deleteProjButton.classList.add("delete-button");
        this.deleteProjButton.textContent = "Delete Project";

        this.projectContainer.appendChild(this.projectName);
        this.projectContainer.appendChild(this.tasksContainer);
        this.projectContainer.appendChild(this.deleteProjButton);

        this.contentContainer.appendChild(this.sidebarContainer);
        this.contentContainer.appendChild(this.projectContainer);

        document.body.appendChild(this.contentContainer);
    }

    renderPage() {
        this.renderProjectContainer();
        this.renderSidebarContainer();
    }

    renderSidebarContainer(projectNames) {
        projectNames.forEach(name => {
            // Create div with class project-name for each project
            const div = document.createElement("div");
            div.textContent = name;
            div.classList.add("project-name");
            this.projectsListDiv.appendChild(div);
        })
    }

    renderProjectContainer(currProject) {
        console.log(currProject.todos);
        this.projectName.textContent = currProject.name;
        currProject.todos.forEach(todo => {
            const divTodo = document.createElement("div");
            divTodo.textContent = todo.title;
            divTodo.classList.add("todo-item");
            this.tasksContainer.appendChild(divTodo);
        })
    }
}