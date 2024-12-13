export class EventManager {
    constructor() {
        this.sidebarContainer = document.querySelector(".sidebar-container");
        this.projectContainer = document.querySelector(".project-container");

        this.sidebarContainer.addEventListener("click", (e) => {
            if(e.target.classList.contains("action-add-task")) {
                this.addTaskPopUp();
            } else if(e.target.classList.contains("action-add-project")) {

            }
        })
    }

    addTaskPopUp() {

    }

    addProjectPopUp() {

    }
}