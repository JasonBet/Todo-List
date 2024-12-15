export function retrieve() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const currProjIndex = parseInt(localStorage.getItem('currProj'), 10) || 0;
    const safeIndex = (currProjIndex >= 0 && currProjIndex < projects.length) ? currProjIndex : 0;
    return [projects, safeIndex];
}