import React from 'react';

import { Grid, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    root:{}
}));

//Component Plan:

//Project Card
    //Title
    //Technologies Used
    //Learn More -> Modal

//Modal
    //2-3 images of work done on the projects
    //L & R buttons
    //Project Title
    //Sub Title
    //HR

    //Project description

    
    //Visit Site
    //Close Button 

export default function ProjectCard(props){

    return(
        <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h3">
                {props.data.companyTitle}
            </Typography>
        </Grid>
    )
}