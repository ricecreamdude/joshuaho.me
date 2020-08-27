import React from 'react';

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    root:{
        display: "flex",
        flexDirection: "column",
        paddingBottom: theme.spacing(10),
    },
    text:{
        fontWeight: "700",
        marginBottom:"10px",
        textTransform: "uppercase"        
    },
    hrule:{
        width: "72px",
        borderBottom: "5px solid #444649"
    }
}))



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