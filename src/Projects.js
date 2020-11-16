import React, { Component } from 'react'
import PROJECTS from './data/projects'

class Project extends Component {
    render() {
        const { title, description, image, link } = this.props.project;
        return (
            <div style={{ display:"inline-block", width: 300, margin: 10 }}>
                <h3>{title}</h3>
                <a href = {link}><img src={image} alt='pic' style ={{ width:200, height:120 }} /></a>
                <p>{description} </p>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Operating systems</h2>
                <div>
                    {
                        PROJECTS.map(i => {
                            return (
                                <Project key= {i.id} project= {i} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects
