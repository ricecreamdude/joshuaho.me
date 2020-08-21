import React from 'react';

import SectionHeader from '../SectionHeader/SectionHeader';

import { makeStyles } from '@material-ui/core/styles';

//Why do we need to wrap this in ()?
const useStyles = makeStyles( (theme) => ({
    root: {
        backgroundColor: theme.palette.background.grey,
    }
}))

function Projects(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <SectionHeader text="Projects" />
        </div>

    )
}

export default Projects;