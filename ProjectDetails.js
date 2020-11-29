import React from 'react';
import myProjects from '../myProjects.json';


class ProjectDetails extends React.Component {
    state = {
        name: '', 
        technologies: '',
        year: '',
        description: ''
    }

    componentDidMount() {
        //Going to get the project id from the url
        let projectId = this.props.match.params.id;   // here is ....id because in app.js we wrote id
        //Going to find the project inside my projects array
        //using the id that comes from the url
        console.log('id coming from the url', projectId);
        let foundProject = myProjects.find((project) => {
            return project.id === projectId;
        });

        this.setState({
            name: foundProject.name,
            technologies: foundProject.technologies,
            year: foundProject.year,
            description: foundProject.description
        })

    }

    render() {
        return (
            <div>
                <h3>Project Detail: {this.state.name} </h3>
                <p> Description: {this.state.description}   </p>
                <p> Year: {this.state.year}   </p>
                <p> Used Technologies: {this.state.technologies}   </p>
            </div>
            
        )
    }
}

export default ProjectDetails;