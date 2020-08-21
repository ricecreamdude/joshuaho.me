import React from 'react';

import { Box } from '@material-ui/core'

import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header'
import About from '../components/About/About'

function Home(){

    return(
        <Box>
            <Header/>
            <Hero />
            <About />
        </Box>
    )

};

export default Home;