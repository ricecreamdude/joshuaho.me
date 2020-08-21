import React from 'react';

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root:{
        display: "flex",
        flexDirection: "column",
        marginBottom: "96px",

    },
    text:{
        fontWeight: "700",
        color: "rgb(68, 70, 73)",
        marginBottom:"10px",
        textTransform: "uppercase"        
    },
    hrule:{
        width: "80px",
        color: "rgb(68, 70, 73)",
        borderBottom: "5px solid rgb(68, 70, 73)" 
    }
})



function SectionHeader(props){

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box display="flex" justifyContent="center">
                <Typography component="h2" variant="h3" className={classes.text}>
                    {props.text}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
                <div className={classes.hrule}></div>
            </Box>
        </div>
    )
}

export default SectionHeader