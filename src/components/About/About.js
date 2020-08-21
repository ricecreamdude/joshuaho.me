
import React from 'react'

import { Container, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import SectionHeader from '../SectionHeader/SectionHeader'
import SkillCard from './SkillCard';

const useStyles = makeStyles((theme)=>({

    root:{}

}))


function About(){

    const skillsData = [
        {
            title:"Fast",
            text:"DEMO TEXT",
            icon:""    
        },
        {
            title:"Responsive",
            text:"DEMO TEXT",
            icon:""    
        },
        {
            title:"Dynamic",
            text:"DEMO TEXT",
            icon:""    
        },
        {
            title:"Intuitive",
            text:"DEMO TEXT",
            icon:""    
        },
    ]

    return(
        <section>
            <SectionHeader text="About" />
            <Grid container spacing={1}>
                {
                    skillsData.map( (skill) => {

                        return(
                            <SkillCard title={skill.title} text={skill.text} key={skill.title}/>
                        )
                    })
                }
            </Grid>
        </section>
    )
}

export default About;