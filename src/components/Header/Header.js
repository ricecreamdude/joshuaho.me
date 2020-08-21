import React from 'react';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root:{
        height:"60px",
        backgroundColor: "#1B242F"
    },
    toolbar:{
        display: "flex",
        justifyContent:"flex-end",
    },
    button:{
        width:"1.4em",
        height:"1.4em",
    }

})

function Header(){

    const classes = useStyles();

    return(
        <div>
            <AppBar position="fixed" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon m={4} className={classes.button}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;