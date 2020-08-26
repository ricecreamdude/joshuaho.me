import React from 'react';

import { makeStyles } from '@material-ui/core/styles'

import { Modal, Button, Backdrop, Fade, } from '@material-ui/core';

import { Card, CardActions, CardMedia, CardContent, Link} from '@material-ui/core';
import { Typography } from '@material-ui/core'

import { Close, OpenInNew } from '@material-ui/icons';


const useStyles = makeStyles( theme => ({
    root:{
        height: "100%",
    },
    container:{
        display: "flex",
        flexDirection: 'column',
        height: "100%",
    },
    imageWrapper:{
        flexGrow: "8"
    },
    textWrapper:{
        flexGrow: "6"
    },
    titleWrapper:{},
    title:{
        fontWeight: '600'
    },
    subtitle:{
        textTransform:"uppercase",
        color: theme.palette.background.dGray,
        fontSize: '16px'
    },
    hr:{
        borderBottom: `1px solid ${theme.palette.background.dGray}`,
        height: "0",
        margin: '10px 0'
    },
    text:{},
    actionsContainer:{
        display:"flex",
        justifyContent:"space-between",
        padding: theme.spacing(2)
    },
    viewSiteButton:{
        height:"36px",
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width: '120px'
    },
    closeButton:{
        height: "36px",
        width: "36px"
    },
}))

function ProjectModal( props ){

    const classes = useStyles();

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 500}}
            className={classes.root}
        >
            <Fade in={props.open}>
                <Card className={classes.container}>
                    <CardMedia 
                        className={classes.imageWrapper}
                        image={props.data.modalImageTemp}
                    />
                    <CardContent className={classes.textWrapper}>
                        <div className={classes.titleWrapper}>
                            <Typography component="h4" variant="h4" className={classes.title}>
                                {props.data.companyTitle}
                            </Typography>
                            <Typography component="p" variant="p" className={classes.subtitle}>
                                {props.data.modalSubtitle}
                            </Typography>
                        </div>
                        <div className={classes.hr} />
                        <Typography component="p" variant="p">
                            {props.data.modalDescription}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actionsContainer}>
                        {/* View Site */}
                        <Link href={props.data.url} target="_blank" rel="noopener" underline="none">
                            <Button 
                                onClick={props.handleClose}
                                className={classes.viewSiteButton}
                            >
                                View Site <OpenInNew p={1} />

                            </Button>
                        </Link>
                        <Button 
                            onClick={props.handleClose}
                            className={classes.closeButton}
                        >
                            <Close />
                        </Button>
                    </CardActions>
                </Card>
            </Fade>
        </Modal>
    )

}

export default ProjectModal