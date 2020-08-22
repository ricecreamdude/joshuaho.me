import React from 'react';

import { Container, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    root:{
        textAlign: "center",
        height: "100vh",
        padding: `${theme.spacing(2)} 0`,
        backgroundColor: theme.palette.background.dark,
        color: "white"
    },  
    name:{
        color: theme.palette.primary.main,
        fontSize: "56px"
    }
}));

function Hero(){

    const classes = useStyles();

    return(
        <div>
            <Box display="flex" className={classes.root} alignItems="center">
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h3" >
                    Hi, I'm <span className={classes.name}>Joshua Ho</span>. <br />
                        I'm a Web Developer
                    </Typography>
                </Container>
            </Box>
        </div>
    )
}

export default Hero;