import { Project } from "./projects.js";
export class ProjectManager {
    constructor() {
        this.projectsArr = [new Project("Today")];
        this.currProject = this.projectsArr[0];
    }

    hydrateProjects(projectsData, currentProjIndex) {
        // If no projects data is retrieved, don't overwrite the default "Today" project
        if (!projectsData || projectsData.length === 0) {
            // Keep the default "Today" project created in the constructor
            return;
        }
    
        this.projectsArr = projectsData.map(projectData => Project.fromData(projectData));
    
        const safeIndex = currentProjIndex >= 0 && currentProjIndex < this.projectsArr.length
            ? currentProjIndex
            : 0;
        
        this.setCurrProject(this.projectsArr[safeIndex]);
    }


    addProject(title) {
        const project = new Project(title);
        this.projectsArr.push(project);
        this.setCurrProject(project);
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

    deleteProject(project) {
        if(this.projectsArr.length <=1) {
            this.projectsArr.splice(this.getProjectIndex(project), 1);
            this.addProject("Today");
        } else {
            this.projectsArr.splice(this.getProjectIndex(project), 1);
        }   
    }

    getProjectNames() {
        const projectNames = [];
        this.projectsArr.forEach(project => projectNames.push(project.name));
        return projectNames;
    }
}