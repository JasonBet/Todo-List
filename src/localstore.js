export function storage(data) {
    const projectsData = JSON.stringify(data);

    localStorage.setItem('projects', projectsData);
    console.log("hello")
}