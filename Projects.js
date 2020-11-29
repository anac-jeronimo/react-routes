import React from 'react';
import myProjects from '../myProjects.json';
import { Link } from 'react-router-dom'; 

class Projects extends React.Component {
    state = {
        projects: myProjects
    }

    render () {
        return (
            <div>
                <h2>Projects</h2>
            {this.state.projects.map((project, index) => {
                return (
                    <div key={index}>
                    
                    <Link to={`/projects/${project.id}`}>{project.name}</Link>
                    <h4>{project.technologies}</h4>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default Projects;