import React, { useState } from 'react';

import { Grid, Typography, Card, CardMedia, CardActionArea, Button, Box, Container } from '@material-ui/core'

import ProjectModal from './ProjectModal'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    card:{
        position:"relative",
        height: '280px',
    },
    front:{
        position:"absolute",
        width: "100%",
        boxShadow:"none",
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
        justifyContent:"space-evenly",
    },
    hoverTitle:{
        fontWeight: '700',
        fontSize: '2rem',
        marginBottom: theme.spacing(0.5)
    },
    hoverSubtitle:{
        color: theme.palette.primary.main,
        fontWeight: '400'
    },
    cardHalf:{
        display:"flex",
        alignItems:"center",
        textAlign: "center",
        flexDirection:"column",
    },
    button:{
        border: `1.5px solid ${theme.palette.primary.main}`,
        width: '180px'
    }
}));

export default function ProjectCard(props){

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false); 

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        setHover(false)
    };

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return(
        <Grid item xs={12} md={6} lg={4}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={classes.card}>
                <Card 
                    className={classes.front}
                    style={{opacity: hover ? '0' : '1' }}
                >
                    
                    <CardMedia 
                        className={classes.cardImage}
                        image={props.data.cardImage}
                        title={props.data.companyTitle}
                    />
                    
                    <ProjectModal 
                        open={open}
                        handleClose={handleClose}
                        data={props.data}
                    />
                </Card>
                <Box
                    style={{visibility: hover ? 'visible' : 'hidden',}}
                    className={classes.hover}
                    display="flex"
                >
                    <Box className={classes.cardHalf}>
                        <Typography variant="h4" className={classes.hoverTitle}>{props.data.companyTitle}</Typography>
                        <span className={classes.hoverSubtitle}>{props.data.techUsed}</span>
                    </Box>
                    <Box className={classes.cardHalf}>
                        <Button
                            onClick={handleOpen}
                            size="large"
                            color='primary'
                            variant="outlined"
                            className={classes.button}
                            disableElevation
                        > LEARN MORE  
                        </Button>
                    </Box>
                </Box>
            </div>
        </Grid>
    )
}