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
        this.addTaskSideContainer.classList.add("add-task-sidebar");

        this.svgAddTaskSymbol = document.createElement("div");
        this.svgAddTaskSymbol.innerHTML = `<svg class="action-add-task" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
        this.svgAddTaskSymbol.classList.add("svg-add-symbol", "action-add-task")
        this.addTaskText = document.createElement("p");
        this.addTaskText.classList.add("action-add-task");
        this.addTaskText.textContent = "Add Task";

        this.addTaskSideContainer.appendChild(this.svgAddTaskSymbol);
        this.addTaskSideContainer.appendChild(this.addTaskText);

        this.projectsListContainer = document.createElement("div");
        this.projectsListContainer.classList.add("projects-sidebar-container");
        this.projectListHead = document.createElement("h2");
        this.projectListHead.textContent = "Projects";
        this.projectsListDiv = document.createElement("div");
        this.projectsListDiv.classList.add("projects-list-div");
        this.addProjectButton = document.createElement("button");
        this.addProjectButton.classList.add("action-add-project", "button-add-project");
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

    renderPage(projectNames, currProject) {
        this.renderProjectContainer(currProject);
        this.renderSidebarContainer(projectNames);
    }

    renderSidebarContainer(projectNames) {
        this.projectsListDiv.innerHTML = "";
        projectNames.forEach(name => {
            // Create div with class project-name for each project
            const div = document.createElement("div");
            div.textContent = name;
            div.classList.add("project-name");
            this.projectsListDiv.appendChild(div);
        })
    }

    renderProjectContainer(currProject) {  
        this.projectName.textContent = currProject.name;
        this.updateTasks(currProject);
    }

    updateTasks(currProject) {
        this.tasksContainer.innerHTML = "";
        currProject.todos.forEach((todo, index) => {
            const divTodoItem = document.createElement("div");
            divTodoItem.classList.add("div-todo-item");
            divTodoItem.setAttribute("data-index", index); // Add data attribute to track index

            this.svgAddBullet = document.createElement("div");
            this.svgAddBullet.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>circle-outline</title>
                <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
            this.svgAddBullet.classList.add("svg-bullet-symbol");
            this.svgAddBullet.setAttribute("data-index", index);

            const todoItemText = document.createElement("p");
            todoItemText.textContent = todo.title;
            todoItemText.classList.add("todo-item");

            const todoDueDate = document.createElement("p");
            todoDueDate.textContent = todo.dueDate;
            todoDueDate.classList.add("todo-item");

            divTodoItem.appendChild(this.svgAddBullet);
            divTodoItem.appendChild(todoItemText);
            divTodoItem.appendChild(todoDueDate);
            this.tasksContainer.appendChild(divTodoItem);
        });
    }
}
