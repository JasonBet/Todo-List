export class RenderManager {
    constructor() {
        const contentContainer = document.createElement("div");
        const sideBarContainer = document.createElement("div");
        const projectContainer = document.createElement("div");

        contentContainer.classList.add("content-container");
        sideBarContainer.classList.add("sidebar-container");
        projectContainer.classList.add("project-container");

        contentContainer.appendChild(sideBarContainer);
        contentContainer.appendChild(projectContainer);

        document.body.appendChild(contentContainer);
    }

    
}