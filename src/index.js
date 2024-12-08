import "./styles.css";
import { Project } from "./projects.js";

// Create an array to store projects
let projectsArr = [];

// Create initial default project and add it to array of projects
const project1 = new Project("Today");
projectsArr.push(project1);
console.log(projectsArr);
