import React from 'react'

import { Box } from '@material-ui/core'

import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'

// Inspiration: http://findmatthew.com/

function Home(){

    return(
        <Box>
            <Header />
            <Hero />
            <About />
            <Projects />
        </Box>
    )

};

export default Home;