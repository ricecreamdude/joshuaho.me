import React from 'react';

import { Grid, Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( (theme)=>({
    root:{
        textAlign: "center",
        marginBottom: theme.spacing(6)
    },
    icon:{
        width: theme.spacing(6),
        height: theme.spacing(6),
        padding: theme.spacing(2),
        color: "white",
        backgroundColor: theme.palette.primary.main,
        borderRadius: '50px',
        marginBottom: theme.spacing(1)
    },
    iconBackground:{
        backgroundColor: theme.palette.primary.main
    },
    title:{
        marginBottom: theme.spacing(2)
    },
    text:{}

}))

function AboutCard(props){

    const classes = useStyles();
    const Icon = props.icon;

    return(
        <Grid item xs={12} md={3}>
            <Box className={classes.root}>
                <Icon className={classes.icon} />
                <Typography component="h3" variant="h4" className={classes.title}>
                    {props.title}
                </Typography>
                <Typography component="p">
                    {props.text}
                </Typography>
            </Box>
        </Grid>
    )

}


export default AboutCard;