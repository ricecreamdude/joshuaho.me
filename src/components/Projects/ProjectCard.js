import React, { useState } from 'react';

import { Grid, Typography, Card, CardMedia, CardActionArea, Modal, Button, Box} from '@material-ui/core'
import { Fade, Backdrop } from '@material-ui/core'

import ProjectModal from './ProjectModal'

import { makeStyles } from '@material-ui/core/styles'
import { Visibility } from '@material-ui/icons';

const useStyles = makeStyles( theme => ({
    grid:{
        position:"relative"
    },
    root:{
        position:"absolute",
        width: "100%",
        boxShadow:"none"
    },
    cardImage:{
        height: "280px",
        width: "100%"
    },
    cardTitle:{
        fontSize: ""
    },
    hover:{
        position:"absolute",
        height: "280px",
        width: "100%",
        flexDirection:"column",
    },
    cardHalf:{
        display:"flex",
        flexGrow:"1",
        border: "1px solid black",
        justifyContent:"center",
        alignItems:"center"
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
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false); 

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        setHover(false)
    };

    const handleMouseEnter = () => {
        setHover(true);
        console.log("mouse entered", hover)
    }
    const handleMouseLeave = () => {
        setHover(false);
        console.log("mouse left", hover)
    }

    return(
        <Grid item xs={12} md={6} lg={4} className={classes.grid}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card 
                className={classes.root}
                style={{opacity: hover ? '0' : '1' }}
            >
                <CardActionArea>
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
            <Box
                style={{visibility: hover ? 'visible' : 'hidden'}}
                className={classes.hover}
                display="flex"
            >
                <Box className={classes.cardHalf}>
                    {props.data.companyTitle}
                </Box>
                <Box className={classes.cardHalf}>
                    <Button
                        onClick={handleOpen}
                    >
                        LEARN MORE
                    </Button>
                </Box>


            </Box>
        </Grid>
    )
}