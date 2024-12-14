export class EventManager {
    constructor() {
        this.sidebarContainer = document.querySelector(".sidebar-container");
        this.projectContainer = document.querySelector(".project-container");

        this.sidebarContainer.addEventListener("click", (e) => {
            if(e.target.classList.contains("action-add-task")) {
                this.addTaskPopUp();
            } else if(e.target.classList.contains("action-add-project")) {
                this.addProjectPopUp();
            }
        })
    }

    addTaskPopUp() {
        const addTaskDialog = document.createElement("dialog");
        const form = document.createElement("form");

        const title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("name", "title");
        title.setAttribute("placeholder", "Title");

        const description = document.createElement("input");
        description.setAttribute("type", "text");
        description.setAttribute("name", "description");
        description.setAttribute("placeholder", "Description");

        const dueDate = document.createElement("input");
        dueDate.setAttribute("type", "date");
        dueDate.setAttribute("name", "dueDate");
        dueDate.setAttribute("placeholder", "Due Date");

        const priority = document.createElement("input");
        priority.setAttribute("type", "number");
        priority.setAttribute("name", "priority");
        priority.setAttribute("placeholder", "Priority");

        const submitButton = document.createElement("button");
        submitButton.setAttribute("type", "submit");
        submitButton.textContent = "Add Task";

        const cancelButton = document.createElement("button");
        cancelButton.formNoValidate = true;
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", (e) => {
            e.preventDefault();
            addTaskDialog.close();
            form.reset();
        })

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const title = formData.get("title");
            const description = formData.get("description");
            const dueDate = formData.get("dueDate");
            const priority = formData.get("priority");

            // Dispatch events to index module to maintain loose coupling of modules
            const event = new CustomEvent("taskCreated", {
                detail: {title, description, dueDate, priority}
            });
            document.dispatchEvent(event);

            addTaskDialog.close();
            form.reset();
        })

        form.appendChild(title);
        form.appendChild(description);
        form.appendChild(dueDate);
        form.appendChild(priority);
        form.appendChild(submitButton);
        form.appendChild(cancelButton);

        addTaskDialog.appendChild(form);
        this.sidebarContainer.appendChild(addTaskDialog);
        addTaskDialog.showModal();
    }

    addProjectPopUp() {
        const addProjectDialog = document.createElement("dialog");
        const form = document.createElement("form");

        const title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("name", "title");
        title.setAttribute("placeholder", "Project Name");

        const submitButton = document.createElement("button");
        submitButton.setAttribute("type", "submit");
        submitButton.textContent = "Add Project";

        const cancelButton = document.createElement("button");
        cancelButton.formNoValidate = true;
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", (e) => {
            e.preventDefault();
            addProjectDialog.close();
            form.reset();
        })

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const title = formData.get("title");

            // Dispatch events to index module to maintain loose coupling of modules
            const event = new CustomEvent("projectCreated", {
                detail: {title}
            });
            document.dispatchEvent(event);

            addProjectDialog.close();
            form.reset();
        })

        form.appendChild(title);
        form.appendChild(submitButton);
        form.appendChild(cancelButton);

        addProjectDialog.appendChild(form);
        this.sidebarContainer.appendChild(addProjectDialog);
        addProjectDialog.showModal();
    }
}