import React from 'react';

import SectionHeader from '../SectionHeader/SectionHeader';

import { Container, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import projectData from './ProjectData'
import ProjectCard from './ProjectCard';

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
            <Grid container>
                { projects }
            </Grid>
    
        </section>

    )
}

export default Projects;