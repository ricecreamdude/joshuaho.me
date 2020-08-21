import React from 'react';

import { Grid, Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( (theme)=>({
    root:{
        textAlign: "center",
        marginBottom: theme.spacing(6)
    },
    icon:{
        width: theme.spacing(7),
        height: theme.spacing(7),
        padding: theme.spacing(2),
    },
    title:{
        marginBottom: theme.spacing(2)
    },
    text:{}

}))

function SkillCard(props){

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


export default SkillCard;