import React from 'react';

import { Grid, Box, Typography, Icon } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( (theme)=>({
    root:{
        textAlign: "center"
    }
}))

function SkillCard(props){

    const classes = useStyles();

    return(
        <Grid item xs={12} md={3}>
            <Box className={classes.root}>
                <Icon></Icon>
                <Typography component="h3" variant="h4">
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