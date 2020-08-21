import React from 'react';

import { Box } from '@material-ui/core'

import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header'

function Home(){

    return(
        <Box>
            <Header/>
            <Hero />
        </Box>
    )

};

export default Home;