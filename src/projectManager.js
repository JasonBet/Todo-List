import { Project } from "./projects.js";
export class ProjectManager {
    constructor() {
        this.projectsArr = [new Project("Today")];
        this.currProject = this.projectsArr[0];
    }

    addProject(title) {
        const project = new Project(title);
        this.projectsArr.push(project);
    }

    getProjectIndex(project) {
        return this.projectsArr.findIndex(object => object === project);
    }

    setCurrProject(project) {
        this.currProject = this.projectsArr[this.getProjectIndex(project)];
    }

    getCurrProject() {
        return this.currProject;
    }
}