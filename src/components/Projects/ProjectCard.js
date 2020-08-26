import React from 'react';

import { Grid, Typography, Card, CardMedia, CardActionArea, Modal} from '@material-ui/core'
import { Fade, Backdrop } from '@material-ui/core'

import ProjectModal from './ProjectModal'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    root:{
        width: "100%",
        boxShadow:"none"
    },
    cardImage:{
        height: "280px",
        width: "100%"
    },
    cardTitle:{
        fontSize: ""
    }
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

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false);

    return(
        <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea
                    onClick={handleOpen}
                >
                    <CardMedia 
                        className={classes.cardImage}
                        image={props.data.cardImage}
                        title={props.data.companyTitle}
                    />
                    {/* <Typography variant="h3" className={classes.cardTitle}>
                        {props.data.companyTitle}
                    </Typography> */}
                </CardActionArea>
                <ProjectModal 
                    open={open}
                    handleClose={handleClose}
                    data={props.data}
                />
                
            </Card>
        </Grid>
    )
}