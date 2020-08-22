import React from 'react';

import SectionHeader from '../SectionHeader/SectionHeader';

import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import projectData from './ProjectData'
import ProjectCard from './ProjectCard';

//Features:

//Filter between projects
    //Projects need tags
//Displays all portfolio items
//Portofolio item has a modal associated with it
//Turn this into a service with a DB
//Be able to update remotely


//Why do we need to wrap this in ()?
const useStyles = makeStyles( (theme) => ({
    root: {
        backgroundColor: theme.palette.background.grey,
    }
}))

function Projects(){

    const classes = useStyles();

    let projects = projectData.map( project => <ProjectCard data={project} key={project.companyTitle} />)

    return(
        <section className={classes.root}>
            <SectionHeader text="Projects" />
            { projects }
        </section>

    )
}

export default Projects;