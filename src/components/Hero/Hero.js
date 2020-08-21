import React from 'react';

import { Container, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( {
    root:{
        textAlign: "center",
        height: "100vh",
        paddingTop: "16px",
        backgroundColor: "#252934",
        color: "white"
    },  

} );

function Hero(){

    const classes = useStyles();

    return(
        <Box display="flex" className={classes.root} alignItems="center">
            <Container maxWidth="sm">
                <Typography component="h1" variant="h4" >
                    Hi, I'm Joshua Ho. <br />
                    I'm a Web Developer
                </Typography>
             </Container>
        </Box>
    )
}

export default Hero;