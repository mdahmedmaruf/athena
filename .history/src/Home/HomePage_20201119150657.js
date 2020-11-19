import React from 'react';
import About from './About/About';
import Achievements from './Achievements/Achievements';
import Hero from './Hero/Hero';
import StayRunning from './StayRunning/StayRunning';

const HomePage = () => {
    return (
        <> 
            <Hero/>
            <StayRunning></StayRunning>
            <Achievements></Achievements>
            <About/>
        </>
    );
};

export default HomePage;