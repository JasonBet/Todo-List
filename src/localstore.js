export function storage(data, currentProjIndex) {
    const projectsData = JSON.stringify(data);

    localStorage.setItem('projects', projectsData);
    localStorage.setItem('currProj', currentProjIndex);

}