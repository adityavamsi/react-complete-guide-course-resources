import CreateProject from "./CreateProject";



export default function ProjectsBar(){


    return <div id="project-bar">
        <h1 >Your Projects</h1>
        <button id="new-project" onClick={CreateProject}>+ new project</button>
        <div id="project-names">
        <h2>Hello</h2>
        <h2>Hello</h2>
        </div>
        
    </div>
}