
import React from 'react'

import { Container, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import SectionHeader from '../SectionHeader/SectionHeader'
import AboutCard from './AboutCard';

import { Speed, Fingerprint , Group, Extension } from '@material-ui/icons';

const useStyles = makeStyles( (theme)=>({

    root:{}

}))


function About(){

    const skillsData = [
        {
            title:"Fast",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            icon: Speed
        },
        {
            title:"Responsive",
            text:"Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            icon: Fingerprint
        },
        {
            title:"Dynamic",
            text:"Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: Group
        },
        {
            title:"Intuitive",
            text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
            icon: Extension
        },
    ]

    const SkillsSection = skillsData.map( (skill) => {

        return(
            <AboutCard title={skill.title} text={skill.text} icon={skill.icon} key={skill.title}/>
        )
    })

    return(
        <Container component="section">
            <SectionHeader text="About" />
            <Grid container spacing={1}>
                { SkillsSection }
            </Grid>

        </Container>
    )
}

export default About;