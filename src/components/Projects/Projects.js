import React from 'react';

import SectionHeader from '../SectionHeader/SectionHeader';

import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

//Why do we need to wrap this in ()?
const useStyles = makeStyles( (theme) => ({
    root: {
        backgroundColor: theme.palette.background.grey,
    }
}))


//Features:

//Filter between tagged projects
//Displays all portfolio items appropriately

function Projects(){

    const classes = useStyles();

    return(
        <section className={classes.root}>
            <SectionHeader text="Projects" />
            {/* <Container maxWidth="md">
            </Container> */}
        </section>

    )
}

export default Projects;